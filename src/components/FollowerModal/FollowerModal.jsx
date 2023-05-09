import { useEffect } from "react";
import styles from "./FollowerModal.scss";
import { CommonFollowerApi } from "../../api/common";
import { useState } from "react";
import avatar from '../../assets/img/avt.jpg'

function FollowerModal({ userid }) {
  const userIdGetFollower = userid;
  const [listFollowers, setListFollowers] = useState([]);

  function fetchListFollowers() {
    return CommonFollowerApi.listFollowers(userIdGetFollower)
      .then((response) => {
        const fetchListFollowers = response.data.data.map((follower, index) => {
          const temp = { ...follower };
          return temp;
        });
        setListFollowers(fetchListFollowers);
        console.log(listFollowers);
      })
      .catch((error) => { });
  }
  useEffect(() => {
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

                    src={listFollowers[key].avatar ? listFollowers[key].avatar : avatar}

                    alt=""
                  />
                  <a href={`/profile/${listFollowers[key].username}`}>
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
