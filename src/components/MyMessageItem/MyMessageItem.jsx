import style from "./MyMessageItem.scss";

function MyMessageItem({ message, createdAt }) {
  return (
    <>
      <div className="my-message-item-home">{message}</div>
    </>
  );
}
export default MyMessageItem;
