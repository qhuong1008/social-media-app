import style from "./MessageUser.scss";

function MessageUser() {
  return (
    <>
      <div className="message-user-home">
        <div className="avatar-box">
          <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg" />
        </div>
        <div class="user">
          <div>Ngoc giau ngo</div>
          <div className="info">
            <p className="last-message">Ngoc giau qua ngo</p>
            <p>.</p>
            <p>3d</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessageUser;
