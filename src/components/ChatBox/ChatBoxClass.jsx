import style from './ChatBoxClass.scss'
import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { USER_KEY_NAME } from "../../types";
import { SOCKET_REGISTER_URL, SOCKET_USER_TOPIC_PREFIX_URL } from "../../types";
import { CommonUserApi } from '../../api/common';

var stompClient = null;
const ChatRoom = (props) => {
  console.log(props)
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedReceiverJSONInfo, setSelectedReceiverJSONInfo] =
  //   useState(null);

  // * Lấy thông tin user đang đăng nhập hiện tại trong localStorage
  // * @returns user JSON
  // */

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
   * componentDidMount()
   */

  //Thông tin người đang nhắn tin người người dùng đăng nhập hiện tại
  const currentLoginedUser = getCurrentLogedInUser();
  // console.log("currentLoginedUser:", currentLoginedUser);
  // const friendUserJsonInfo = props.friend;
  // console.log("friendUserJsonInfo:", friendUserJsonInfo);
  // if (!friendUserJsonInfo) {
  //   console.log("%c ChatBox error: missing props.friend", "color: red;");
  // }
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState([]);

  const [userList, setUserList] = useState([]);

  const [userData, setUserData] = useState({
    username: currentLoginedUser.username,
    receivername: tab,
    connected: false,
    message: ''
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS(SOCKET_REGISTER_URL);
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    setUserData({ ...userData, "connected": true });
    // stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe(
      `${SOCKET_USER_TOPIC_PREFIX_URL}-${currentLoginedUser.id}`,
      onPrivateMessage
    );
    userJoin();
  }

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  }
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }

  const sendPrivateValue = (e) => {
    const content = e.target.value;
    if (!content) return;
    if (stompClient) {
      var chatMessage = {
        senderId: currentLoginedUser.id,
        receiverId: tab.id,
        message: content,
        createdAt: null,
        type: "MESSAGE",
        randomHash: Math.random().toString(),
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send(`/ws/secured/messenger`, {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  }

  const onError = (err) => {
    console.log(err);

  }

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "message": value });
  }
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE"
      };
      // console.log(chatMessage);
      // stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  }



  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "username": value });
  }

  const registerUser = () => {
    connect();
  }
  useEffect(() => {
    registerUser();
    setPrivateChats(new Map(privateChats));
  }, []);
  useEffect(() => {
    CommonUserApi.listUsers().then((res) => {
      const listUserExceptMe = res.data.data.filter(
        (user) => user.id != currentLoginedUser.id
      );
      setUserList(listUserExceptMe);
      // if (listUserExceptMe.length > 0) {
      //   setSelectedReceiverJSONInfo(listUserExceptMe[0]);
      // }
    });
    console.log("userList:", userList)
    setTab(userList[0])
    console.log("tab:", tab)
    console.log("privateChats:", privateChats)
  }, []);
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <div className="container">

      <div className="chat-box">
        <div className="member-list">
          <ul>

            {[...privateChats.keys()].map((name, index) => (
              <li onClick={() => { setTab(name) }} className={`member ${tab === name && "active"}`} key={index}>{name}</li>
            ))}
          </ul>
        </div>

        {<div className="chat-content">
          <ul className="chat-messages">
            {[...privateChats.get(tab)].map((chat, index) => (
              <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                <div className="message-data">{chat.message}</div>
                {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
              </li>
            ))}
          </ul>

          <div className="send-message">
            <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />
            <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
          </div>
        </div>}
      </div>

    </div>
  )
}

export default ChatRoom