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
function Message() {
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
                <p>Ngoc giau ngo</p>
                <i>
                  <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                </i>
              </div>

              <div id="messages">
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                  </div>
                </div>

                <MyMessageItem />
                <MyMessageItem />
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem />
                  </div>
                </div>
                <MyMessageItem />
                <MyMessageItem />
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                  </div>
                </div>
                <MyMessageItem />
                <MyMessageItem />
                <MyMessageItem />
                <MyMessageItem />
                <MyMessageItem />
                <MyMessageItem />
                <div className="friend-messages">
                  <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
                  <div className="message-list">
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                  </div>
                </div>
              </div>
              <div id="message-input">
                <i id="icon">
                  <FontAwesomeIcon icon={faFaceSmile} className="icon" />
                </i>
                <input type={Text} placeholder="Message..." />
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
