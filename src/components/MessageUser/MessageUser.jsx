import { useState } from "react";
import style from "./MessageUser.scss";

function MessageUser({ user, lastMessage }) {
  const [isNewMessage, setIsNewMessage] = useState(false);

  return (
    <>
      <div className="message-user-home">
        <div className="avatar-box">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
        </div>
        <div className="user">
          <div style={{
            fontWeight: isNewMessage ? 'bold' : 'normal',
            color: isNewMessage ? 'red' : 'black'
          }}>{user.username}</div>
          <div className="info">
            <p className="last-message" style={{
              fontWeight: isNewMessage ? 'bold' : 'normal',
            }}>{lastMessage?.message}</p>
            <p>.</p>
            <p>2d</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessageUser;
