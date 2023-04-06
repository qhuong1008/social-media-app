import styles from "./FollowingModal.scss";
import { useState, useEffect } from "react";
import { CommonFollowerApi } from "../../api/common";

function FollowingModal() {
  const [listFollowing, setListFollowing] = useState([]);

  function fetchListFollowing(){
    CommonFollowerApi.listFollowing()
    .then((res) => {
      const fetchListFollowing = res.data.data.map((following, index) => {
        const temp = { ...following };
        return temp;
      })
      setListFollowing(fetchListFollowing);
    })
    .catch((err) => {});
  }

  
  useEffect (() => {
    fetchListFollowing();
  }, []);
  return (
    <>

    <div className="follower-modal-wrapper">
      <div className="follower-modal-header">Following</div>
      <div className="ruler"></div>
      <div className="follower-list">
      {Object.keys(listFollowing).map(key => {
      return (
        
        <div className="follower-item">
          <div className="follower-left">
            <img
              // src="https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg"
              src = {listFollowing[key].avatar}
              alt=""
            />
            <a href="/profile/catlmao1234">
              <div className="username">{listFollowing[key].username}</div>
              {/* <div className="username">catlmao1234</div> */}
            </a>
            <div className="follow-btn">Follow</div>
          </div>

          <div className="follower-right">
            <div className="delete-btn">Remove</div>
          </div>
          </div>
          
    )
  })}
        
      </div>
    </div>
    </>
  );
}

export default FollowingModal;
