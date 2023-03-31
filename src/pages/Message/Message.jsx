import style from "./Message.scss";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import MessageItem from "../../components/MessageItem/MessageItem";
import MyMessageItem from "../../components/MyMessageItem/MyMessageItem";
import MessageUser from "../../components/MessageUser/MessageUser";
import {
  faChevronDown,
  faCircleInfo,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
  faFaceSmile,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

function Message() {
  const messagesEndRef = useRef(null);
  const [currentUserId, setCurrentUserId] = useState(2);
  const [userMessage, setUserMessage] = useState("");
  const [newText, setNewText] = useState(1);

  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    const temp = [
      {
        senderId: 1,
        receiverId: 2,
        message: "hello",
        createdAt: "2023-12-12 13:56:12",
      },
      {
        senderId: 1,
        receiverId: 2,
        message: "hello222",
        createdAt: "2023-12-12 13:56:12",
      },
      {
        senderId: 2,
        receiverId: 1,
        message: "hi",
        createdAt: "2023-12-12 13:56:12",
      },
      {
        senderId: 1,
        receiverId: 2,
        message: "what ...",
        createdAt: "2023-12-12 13:56:12",
      },
      {
        senderId: 2,
        receiverId: 1,
        message: "Huong",
        createdAt: "2023-12-12 13:56:12",
      },
      {
        senderId: 1,
        receiverId: 2,
        message: "and u",
        createdAt: "2023-12-12 13:56:12",
      },
    ];

    setListMessage([...temp]);
  }, []);

  const addMessage = (message) => {
    setListMessage([...listMessage, message]);
  };

  const handleSendNewText = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      const newMessage = {
        senderId: 1,
        receiverId: 2,
        message: e.target.value,
        createdAt: "2023-12-12 13:56:12",
      };
      addMessage(newMessage);
      setUserMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [listMessage]);

  return (
    <>
      <div className="messageHome">
        <CommonSidebar />
        <MiniSidebar />
        <div className="message-container">
          <div className="messages">
            <div className="users">
              <div id="message-header">
                <div id="user-account">
                  <p>Toandeptry</p>
                  <i>
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                  </i>
                </div>
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                </i>
              </div>
              <div id="user-list">
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
                <MessageUser />
              </div>
            </div>
            <div className="message-box">
              <div id="user">
                <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                <p>Toan dep try hon</p>
                <i>
                  <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                </i>
              </div>

              {/* <div id="messages">
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                  </div>
                </div>
                <div className="my-messages">
                  <MyMessageItem />
                  <MyMessageItem />
                </div>
              </div> */}
              <div id="messages">
                {listMessage.map((msgItem) => {
                  if (currentUserId === msgItem.receiverId) {
                    return (
                      <MyMessageItem
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
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyDown={(e) => handleSendNewText(e)}
                />

                <i id="images">
                  <FontAwesomeIcon icon={faImage} className="icon" />
                </i>
                <i id="like">
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
