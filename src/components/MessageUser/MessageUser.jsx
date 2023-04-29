import { useState } from "react";
import style from "./MessageUser.scss";

function MessageUser({ user, lastMessage }) {
  const [isNewMessage, setIsNewMessage] = useState(true);

  return (
    <>
      <div className="message-user-home">
        <div className="avatar-box">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
        </div>
        <div className="user">
          <div>{user.username}</div>
          <div className={isNewMessage ? "info new-msg" : "info"}>
            <p className="last-message">{lastMessage?.message}</p>
            {/* <div>{user.username}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default MessageUser;
