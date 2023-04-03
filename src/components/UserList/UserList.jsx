import style from "./UserList.scss";

function UserList() {
  return (
    <div className="userlist-container">
      <div className="top">
        <div className="user-account">
          <div className="userlist-container">
            <div className="user-main">
              <div className="avt">
                <img
                  src="https://i.pinimg.com/474x/65/90/f7/6590f7a352330539d159602b1588dffc.jpg"
                  alt="avatar"
                />
              </div>
              <div className="name">
                <div className="username">koyuki_chan01</div>
                <div className="full-name">Koyuki Chan</div>
              </div>
            </div>
            <div className="userlist-action">
              <a href="">Switch</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="title">
          <div className="suggest">Suggestions for you</div>
          <div className="all">See all</div>
        </div>
        <ul className="account-list">
          <li className="account-item">
            <div className="user-account">
              <div className="bottom-userlist-container">
                <div className="user-main">
                  <div className="avt">
                    <img
                      src="https://i.pinimg.com/474x/65/90/f7/6590f7a352330539d159602b1588dffc.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="name">
                    <div className="username">koyuki_chan01</div>
                    <div className="full-name">Koyuki Chan</div>
                  </div>
                </div>
                <div className="userlist-action">
                  <a href="">Switch</a>
                </div>
              </div>
            </div>
          </li>
          <li className="account-item">
            <div className="user-account">
              <div className="bottom-userlist-container">
                <div className="user-main">
                  <div className="avt">
                    <img
                      src="https://i.pinimg.com/474x/65/90/f7/6590f7a352330539d159602b1588dffc.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="name">
                    <div className="username">koyuki_chan01</div>
                    <div className="full-name">Koyuki Chan</div>
                  </div>
                </div>
                <div className="userlist-action">
                  <a href="">Follow</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserList;