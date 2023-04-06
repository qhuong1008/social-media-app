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
          <div>{user.username}</div>
          <div className="info new-msg">
            <p className="last-message">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
            <div
              style={{
                fontWeight: isNewMessage ? "bold" : "normal",
                color: isNewMessage ? "red" : "black",
              }}
            >
              {user.username}
            </div>
            <div className="info">
              <p
                className="last-message"
                style={{
                  fontWeight: isNewMessage ? "bold" : "normal",
                }}
              >
                {lastMessage?.message}
              </p>
              <p>.</p>
              <p>2d</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessageUser;
