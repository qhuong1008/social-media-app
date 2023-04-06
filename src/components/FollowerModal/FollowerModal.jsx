import { useEffect } from "react";
import styles from "./FollowerModal.scss";
import { CommonFollowerApi } from "../../api/common";
import { useState } from "react";
import { Table } from "antd";
function FollowerModal() {
  const [listFollowers, setListFollowers] = useState([]);

  function fetchListFollowers() {
    return CommonFollowerApi.listFollowers()
    .then ((response) => {
        const fetchListFollowers = response.data.data.map((follower, index) => {
            const temp = { ...follower };
            return temp;
        });
        setListFollowers(fetchListFollowers);
    })
    .catch((error) => {});
  }
  useEffect (()=> {
    fetchListFollowers();
  }, []);

  return (
    <>
        <div className="follower-modal-wrapper">
      <div className="follower-modal-header">Followers</div>
      <div className="ruler"></div>
      <div className="follower-list">
        
    {Object.keys(listFollowers).map(key => {
      return (
        <div className="follower-item">
          <div className="follower-left">
            <img
              // src="https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg"
              src={listFollowers[key].avatar}

              alt=""
            />
            <a href="/profile/catlmao1234">
              {/* <div className="username">catlmao1234</div> */}
              <div className="username">{listFollowers[key].username}</div>
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

export default FollowerModal;
