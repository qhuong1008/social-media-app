import styles from "./TagModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { searchUserForPost } from "../../api/common/User";

function TagModal({ callBackFunction }) {
  const [taggedList, setTaggedList] = useState([]);

  // callBackFunction("hihi");

  const handleAddTaggedUser = (user) => {
    taggedList.push(user);
    callBackFunction(taggedList);
  };
  // test
  let [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchUserForPost(search).then((res) => {
      setUserList(res.data.data);
    });
  };

  return (
    <div className="tag-modal-container">
      <div className="tag-header">
        <div>Tag</div>
        <div className="search-area">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </div>
      </div>
      <div className="ruler"></div>
      <div className="tag-list">
        {userList.map((user) => {
          return (
            <div className="tag-user" onClick={() => handleAddTaggedUser(user)}>
              <div className="user-img">
                <img src={user.avatar} alt="" />
              </div>
              <div className="user-info">{user.username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TagModal;
