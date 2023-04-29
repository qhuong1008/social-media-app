/**
 * Author: Nguyen Thanh Van
 * Created: 11:26 5/4/2023
 */

import { useEffect, useInsertionEffect, useRef, useState } from "react";
import { USER_KEY_NAME } from "../../types";
import MessageItem from "../MessageItem/MessageItem";
import MyMessageItem from "../MyMessageItem/MyMessageItem";
import style from './ChatBoxWithUser.scss'
import { faCircleInfo, faDotCircle, faForward, faLinesLeaning, faShare, faSmile } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faFaceSmile,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCKET_REGISTER_URL, SOCKET_USER_TOPIC_PREFIX_URL } from "../../types";
import { getListMessageWithAnotherPerson } from "../../api/common/Message";
import { useStompClient, useSubscription } from "react-stomp-hooks";
import EmojiPicker from 'emoji-picker-react';

/**
 * Chatbox giữa 2 người với nhau
 * @param {dict} props
 * @returns
 */
function ChatBoxWithUser(props) {
  const [messageHover, setMessageHover] = useState(false)
  const [selected, setSelected] = useState(null);
  const [emoji, setEmoji] = useState(false)
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
  const messagesEndRef = useRef();
  const stompClient = useStompClient();
  useSubscription(`${SOCKET_USER_TOPIC_PREFIX_URL}-${currentLoginedUser.id}`, (response) => {
    const message = JSON.parse(response.body);
    addMessageToChatBox(message);
    if (typeof (props.onReceiveMessage) === 'function') {
      props.onReceiveMessage(message);
    }
  });

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
    scrollToBottom();
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
    stompClient.publish({
      destination: `/ws/secured/messenger`,
      body: JSON.stringify(newMessage)
    });
  };

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
      <div className="message-box">
        <div id="user">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
          <p>{friendUserJsonInfo?.username}</p>
          <i>
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          </i>
        </div>

        <div id="messages">
          {listMessageData.map((msgItem, index) => {
            let isLatestMessage = listMessageData.length - 1 === index;

            msgItem.key = Math.random();
            if (currentLoginedUser.id != msgItem.receiverId) {
              return (
                <MyMessageItem
                  key={Math.random()}
                  message={msgItem.message}
                  createdAt={msgItem.createdAt}
                  isLatestMessage={isLatestMessage}
                />
              );
            } else {
              return (
                <div className="friend-messages" >

                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list" >
                    <div className="msg-wrapper">

                      <MessageItem
                        key={Math.random()}
                        message={msgItem.message}
                        createdAt={msgItem.createdAt}
                      />

                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
        {emoji ?
          <EmojiPicker height={500} width={400} className="emoji-wrapper" />
          : <></>}
        <div id="message-input">
          <i id="icon">
            <FontAwesomeIcon icon={faFaceSmile} className="icon" onClick={() => setEmoji(!emoji)} />
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

export default ChatBoxWithUser;
