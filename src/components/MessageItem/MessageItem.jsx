import style from "./MessageItem.scss";

function MessageItem({ message, createdAt }) {
  return (
    <>
      <div
        className="message-item-home"
        style={{ marginBottom: 5, marginTop: 5 }}
      >
        {message}
      </div>
    </>
  );
}
export default MessageItem;
