import "./Message.scss";

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
import { CommonUserApi } from "../../api/common";

import ChatBoxMessengerOneToOne from "../../components/ChatBox";
import { USER_KEY_NAME } from "../../types";
import ChatRoom from "../../components/ChatBox/ChatBoxClass";

/**
 * Component message
 * Bao gồm: Thanh Sidebar bên trái và phần nhắn tin bên trái
 */
function Message(props) {
  const messagesEndRef = useRef(null);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReceiverJSONInfo, setSelectedReceiverJSONInfo] =
    useState(null);

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

  if (!currentLoginedUser) {
    window.location.href = "/login";
  }

  /**
   * onComponentDidMount()
   */
  useEffect(() => { }, []);

  useEffect(() => {
    CommonUserApi.listUsers().then((res) => {
      const listUserExceptMe = res.data.data.filter(
        (user) => user.id != currentLoginedUser.id
      );
      setUserList(listUserExceptMe);
      if (listUserExceptMe.length > 0) {
        setSelectedReceiverJSONInfo(listUserExceptMe[0]);
      }
    });
  }, []);

  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <>
      {/* <div className="messageHome">
        <CommonSidebar />
        <MiniSidebar />

      </div> */}
      <ChatRoom
        /**
         * Mỗi khi có tin nhắn đến chatbox thì cũng về đây 1 tin
         */
        onReceiveMessage={(msg) => {
          const temp = [...userList];
          for (const user of temp) {
            if (user.id == msg.receiverId || user.id == msg.senderId) {
              user.lastMessage = msg;
            }
          }
          setUserList(temp);
          console.log(msg);
        }} />
    </>
  );
}

export default Message;
