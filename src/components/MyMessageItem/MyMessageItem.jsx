import style from "./MyMessageItem.scss";

function MyMessageItem({ message, isLatestMessage, createdAt }) {
  return (
    <div className="my-message-item-container">
      <div className="my-message-item-home">{
        message.includes("/spring-instagram-bucket") ?
          <img src={message} alt="" /> :
          message
      }</div>
      {isLatestMessage ? <div className="read">seen</div> : <></>}
    </div>
  );
}
export default MyMessageItem;
