import { useEffect } from "react";
import styles from "./SearchModal.scss";
import { CommonFollowerApi } from "../../api/common";
import { useState } from "react";
import { CommonUserApi } from "../../api/common";
import { USER_KEY_NAME } from "../../types";
function SearchModal({ userid }) {
  const [userList, setUserList] = useState([])
  const userIdGetFollower = userid;
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
      console.log("listUserExceptMe:", listUserExceptMe)
      setUserList(listUserExceptMe);
      setUserSearchresult(listUserExceptMe)
      if (listUserExceptMe.length > 0) {
        setSelectedReceiverJSONInfo(listUserExceptMe[0]);
      }
    });
  }, []);

  return (
    <>
      <div className="follower-modal-wrapper">
        <div className="follower-modal-header-searchbar">
          <input type="text" value={searchInput}
            onChange={(e) => handleSearchForUsers(e)}
            placeholder="Search for users and posts..." />
        </div>
        <div className="ruler"></div>
        <div className="follower-list">

          {Object.keys(userSearchResult).map(key => {
            return (
              <div className="follower-item">
                <div className="follower-left">
                  <img
                    // src="https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg"
                    src={userSearchResult[key].avatar}

                    alt=""
                  />
                  <a href={`/profile/${userSearchResult[key].username}`}>
                    <div className="username">{userSearchResult[key].username}</div>
                  </a>
                  <div className="follow-btn">Follow</div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  );
}

export default SearchModal;
