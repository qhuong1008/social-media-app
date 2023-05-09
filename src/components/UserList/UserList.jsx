import style from "./UserList.scss";
import avatar from "../../assets/img/avt.jpg";
import { useState, useEffect } from 'react'
import { CommonUserApi } from "../../api/common";
import { USER_KEY_NAME } from "../../types";
import { Link } from "react-router-dom";

function UserList() {
  const user = JSON.parse(localStorage.getItem("USER_INFO"));

  if (user === null) {
    window.location.href = "/login";
  }
  const [userList, setUserList] = useState([])
  const [selectedReceiverJSONInfo, setSelectedReceiverJSONInfo] =
    useState(null);
  const [listFollowers, setListFollowers] = useState([]);
  const [userSearchResult, setUserSearchresult] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const getCurrentLogedInUser = () => {
    if (localStorage.getItem(USER_KEY_NAME) == null) return null;
    try {
      const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
      return user;
    } catch (e) {
      return null;
    }
  };

  /**
   * Thông tin user đang đăng nhập hiện tại:
   *   - **id**: id người dùng
   *   - **username**: tên đăng nhập
   *   - **displayName**: tên hiển thị ra ngoài
   */
  const currentLoginedUser = getCurrentLogedInUser();

  const handleSearchForUsers = (e) => {
    setSearchInput(e.target.value)
    const resultList = userList.filter(user => {
      return user.username.includes(e.target.value)
    })
    setUserSearchresult(resultList)
  }

  useEffect(() => {
    CommonUserApi.listUsers().then((res) => {
      const listUserExceptMe = res.data.data.filter(
        (user) => user.id != currentLoginedUser.id
      );

      setUserList(listUserExceptMe);
      setUserSearchresult(listUserExceptMe)
      if (listUserExceptMe.length > 0) {
        setSelectedReceiverJSONInfo(listUserExceptMe[0]);
      }
    });
  }, []);

  console.log(userList[0])
  if (userList.length === 0) {
    return <>loading</>
  }

  return (
    <div className="userlist-container-wrapper">
      <div className="top">
        <div className="user-account">
          <div className="userlist-container">
            <div className="user-main">
              <div className="avt">
                <img
                  src={user.avatar != null ? user.avatar : avatar}
                  alt="avatar"
                />
              </div>
              <div className="name">
                <div className="username">{user.displayName}</div>
                <div className="full-name">{user.username}</div>
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
        {userList.length > 2 && <ul className="account-list">
          {
            userList.map((user, index) => {
              if (index < 3) {
                return (
                  <Link to={`/profile/${user.username}`}>
                    <li className="account-item">
                      <div className="user-account">
                        <div className="bottom-userlist-container">
                          <div className="user-main">
                            <div className="avt">
                              <img
                                src={user.avatar ? user.avatar : avatar}
                              />
                            </div>
                            <div className="name">
                              <div className="username">{user.username}</div>
                              <div className="full-name">{user.displayName}</div>
                            </div>
                          </div>
                          <div className="userlist-action">
                            <a href={`/profile/${user.username}`}>View Profile</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>

                )
              }
            })
          }


        </ul>}
      </div>
    </div>
  );
}

export default UserList;
