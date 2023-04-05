import style from "./MessageUser.scss";

function MessageUser({ user }) {
  return (
    <>
      <div className="message-user-home">
        <div className="avatar-box">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
        </div>
        <div className="user">
          <div>{user.username}</div>
          <div className="info">
            <p className="last-message">Anh toan oi!!!</p>
            <p>.</p>
            <p>2d</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessageUser;
