import styles from "./TagModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function TagModal({ callBackFunction }) {
  const [taggedList, setTaggedList] = useState([]);

  // callBackFunction("hihi");

  const handleAddTaggedUser = (user) => {
    taggedList.push(user);
    callBackFunction(taggedList);
  };
  // test
  const userList = [
    {
      username: "koyuki_chan01",
      src: "https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg",
    },
    {
      username: "alice",
      src: "https://i.pinimg.com/474x/02/d3/ae/02d3ae22f2a99d86b28e582ffcb08244.jpg",
    },
    {
      username: "emily123",
      src: "https://i.pinimg.com/474x/2c/f4/fe/2cf4fe1a2a59cd23c3b351b1b8ca364f.jpg",
    },
    {
      username: "sophia898",
      src: "https://i.pinimg.com/474x/94/29/76/942976f5a1d91cbf8e51ab970044b1ae.jpg",
    },
    {
      username: "taylor",
      src: "https://i.pinimg.com/474x/1a/df/38/1adf38fdc4ee9f2895be7f340e772767.jpg",
    },
    {
      username: "justin",
      src: "https://i.pinimg.com/474x/d0/c7/18/d0c718c46898d410c4470e463e0d9a5a.jpg",
    },
    {
      username: "sakura",
      src: "https://i.pinimg.com/474x/5d/28/95/5d289567fda2977311f7ef63d40980ba.jpg",
    },
  ];

  return (
    <div className="tag-modal-container">
      <div className="tag-header">
        <div>Tag</div>
        <div className="search-area">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </div>
      </div>
      <div className="ruler"></div>
      <div className="tag-list">
        {userList.map((user) => {
          return (
            <div className="tag-user" onClick={() => handleAddTaggedUser(user)}>
              <div className="user-img">
                <img src={user.src} alt="" />
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
