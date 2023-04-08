/**
 * Author: Nguyen Thanh Van
 * Created: 11:26 5/4/2023
 */

import { useEffect, useInsertionEffect, useRef, useState } from "react";
import { USER_KEY_NAME } from "../../types";
import MessageItem from "../MessageItem/MessageItem";
import MyMessageItem from "../MyMessageItem/MyMessageItem";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import {
  faHeart,
  faFaceSmile,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SockJsClient from "react-stomp";
import { SOCKET_REGISTER_URL, SOCKET_USER_TOPIC_PREFIX_URL } from "../../types";
import { getListMessageWithAnotherPerson } from "../../api/common/Message";

/**
 * Chatbox giữa 2 người với nhau
 * @param {dict} props
 * @returns
 */
function ChatBox(props) {
  //TODO: đoạn này bị lặp code bên Message.jsx -> dùng redux fix lại hộ

  /**
   * Lấy thông tin user đang đăng nhập hiện tại trong localStorage
   * @returns user JSON
   */
  const getCurrentLogedInUser = () => {
    if (localStorage.getItem(USER_KEY_NAME) == null) return null;
    try {
      const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
      return user;
    } catch (e) {
      return null;
    }
  };

  /**
   * Thông tin user đang đăng nhập hiện tại:
   *   - **id**: id người dùng
   *   - **username**: tên đăng nhập
   *   - **displayName**: tên hiển thị ra ngoài
   */
  const currentLoginedUser = getCurrentLogedInUser();

  //Thông tin người đang nhắn tin người người dùng đăng nhập hiện tại
  const friendUserJsonInfo = props.friend;

  if (!friendUserJsonInfo) {
    console.log("%c ChatBox error: missing props.friend", "color: red;");
  }

  const [listMessageData, setListMessageData] = useState([]);
  const [sockJsTopics, setSockJsTopics] = useState([]);
  const messagesEndRef = useRef();
  const sockJsClientRef = useRef();

  /*
   * Thêm tin nhắn vào khung chat (bất kể là ai gửi kể cả mình - hàm này chỉ là handle xử lý thông thường)
   * Xử lý các trường hợp:
   *   - Tin nhắn mình vừa gửi
   *   - Người ta gửi tin nhắn đến mình
   * @param {JSON} message
   * @returns
   */
  const addMessageToChatBox = (message) => {
    if (
      message.randomHash != null &&
      listMessageData.some((u) => u.randomHash == message.randomHash)
    )
      return;
    setListMessageData([...listMessageData, message]);
    //scrollToBottom();
  };

  /**
   * Xử lý sự kiện khi người dùng bấm phím enter vào ô chat
   */
  const handleUserPressEnterChatBoxInput = (e) => {
    const content = e.target.value.trim();
    if (!content) return;
    const newMessage = {
      senderId: currentLoginedUser.id,
      receiverId: friendUserJsonInfo.id,
      message: content,
      createdAt: null,
      type: "MESSAGE",
      randomHash: Math.random().toString(),
    };
    addMessageToChatBox(newMessage);
    e.target.value = "";
    sockJsClientRef.current.client.send(
      `/ws/secured/messenger`,
      {},
      JSON.stringify(newMessage)
    );
  };

  /**
   * Khi sockJS đã kết nối tới server thì bắt đầu subscribe topic cho user đăng nhập hiện tại
   * Mục đích để **nhận** tin nhắn
   */
  useEffect(() => {
    setSockJsTopics([
      `${SOCKET_USER_TOPIC_PREFIX_URL}-${currentLoginedUser.id}`,
    ]);
    console.log("%c SockJS client has been init", "color: green;");

    //onComponentDidUnmount()
    return () => {
      console.log("%c SockJS client has been destroyed", "color: red;");

      //Khi nào component giải phóng bộ nhớ -> ngắt kết nối
      //Hoặc dùng trong React.StrickMode tránh kết nối đến server 2 lần
      sockJsClientRef.current.disconnect();
    };
  }, [sockJsClientRef]);

  useEffect(() => {
    if (props.friend) {
      setListMessageData([]);

      //Lấy lại toàn bộ tin nhắn giữa mình là người dùng mới (người mới click)
      getListMessageWithAnotherPerson(props.friend.id).then((resp) => {
        const messages = resp.data.data;
        setListMessageData([...messages]);
      });
    }
  }, [props.friend]);

  /**
   * Cuộn cửa sổ  nhắn tin về dòng cuối cùng
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  /**
   * Khi nào có tin nhắn mới hoặc danh sách tin nhắn thay đổi thì cuộn danh sách tin nhắn
   */
  useEffect(() => {
    scrollToBottom();
  }, [listMessageData]);

  return (
    <>
      <SockJsClient
        url={SOCKET_REGISTER_URL}
        topics={sockJsTopics}
        onMessage={(msg) => {
          if (typeof props.onReceiveMessage === "function")
            props.onReceiveMessage(msg);
          console.log(msg.senderId, friendUserJsonInfo.id);
          if (
            msg.senderId == friendUserJsonInfo.id ||
            msg.receiverId == friendUserJsonInfo.id
          ) {
            addMessageToChatBox(msg);
          }
        }}
        ref={sockJsClientRef}
      />
      <div className="message-box">
        <div id="user">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
          <p>{friendUserJsonInfo?.username}</p>
          <i>
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          </i>
        </div>

        <div id="messages">
          {listMessageData.map((msgItem) => {
            msgItem.key = Math.random();
            if (currentLoginedUser.id != msgItem.receiverId) {
              return (
                <MyMessageItem
                  key={Math.random()}
                  message={msgItem.message}
                  createdAt={msgItem.createdAt}
                />
              );
            } else {
              return (
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem
                      key={Math.random()}
                      message={msgItem.message}
                      createdAt={msgItem.createdAt}
                    />
                  </div>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>

        <div id="message-input">
          <i id="icon">
            <FontAwesomeIcon icon={faFaceSmile} className="icon" />
          </i>

          <input
            type={Text}
            placeholder="Message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUserPressEnterChatBoxInput(e);
              }
            }}
          />

          <i id="images">
            <FontAwesomeIcon icon={faImage} className="icon" />
          </i>
          <i id="like">
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </i>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
