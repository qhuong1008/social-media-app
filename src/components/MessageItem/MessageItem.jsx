import { useState } from "react";
import style from "./MessageItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faShare } from "@fortawesome/free-solid-svg-icons";
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation
} from "emoji-picker-react";


function MessageItem({ message, createdAt }) {
  const [messageHover, setMessageHover] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function onClick(emojiData, e) {
    setSelectedEmoji(emojiData.unified);
  }
  return (
    <div className="messageItem-container"
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
        {message.includes("/spring-instagram-bucket") ?
          <img src={message} alt="" /> :
          message}

      </div>

    </div>
  );
}
export default MessageItem;
