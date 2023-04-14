import { useState } from "react";
import style from "./MessageItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faShare } from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";

function MessageItem({ message, createdAt }) {
  const [messageHover, setMessageHover] = useState(false);
  const [emoji, setEmoji] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setMessageHover(true);
      }}
      onMouseLeave={() => {
        setMessageHover(false);
        setEmoji(false);
      }}
      style={{
        display: 'flex'
      }}
    >
      <div
        className="message-item-home"
        style={{ marginBottom: 5, marginTop: 5 }}
      >
        {message}
      </div>
      {messageHover ? <div className="icon-list">
        {emoji ?
          <EmojiPicker height={500} width={400} className="emoji-wrapper" />
          : <></>}
        <FontAwesomeIcon icon={faSmile} className="icon" onClick={() => setEmoji(!emoji)} />
        <FontAwesomeIcon icon={faShare} className="icon" />
        <svg
          aria-label="More options"
          class="_ab6-"
          color="rgb(38, 38, 38)"
          fill="rgb(38, 38, 38)"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>

      </div> : <></>}
    </div>
  );
}
export default MessageItem;
