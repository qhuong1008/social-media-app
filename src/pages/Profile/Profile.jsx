import React, { useState, useEffect, useContext } from "react";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import styles from "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDownload,
  faFilm,
  faGear,
  faTableList,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { listPostsFromUser } from "../../api/common/Post";
import PostForm from "../../components/PostForm/PostForm";
import { PopupContext } from "../../App";
import FollowerModal from "../../components/FollowerModal/FollowerModal";
import FollowingModal from "../../components/FollowingModal/FollowingModal";

function Profile() {
  const user = JSON.parse(localStorage.getItem("USER_INFO"));

  const uid = 1;
  const [posts, setPosts] = useState([]);
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupFollowercontent = (content) => {
    setPopupContentLevel(0, content);
  };
  const setPopupFollowingcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await listPostsFromUser(uid);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    setPopupFollowercontent(<FollowerModal />);
    setPopupFollowingcontent(<FollowingModal />);
  }, []);
  return (
    <div className="profile-container">
      <CommonSidebar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-img">
            <img
              src="https://i.pinimg.com/564x/54/ed/49/54ed49c020089b61eb388ce7af27c564.jpg"
              alt="avatar"
            />
          </div>
          <div className="profile-info">
            <section className="user-profile">
              <div className="username">{user.displayName}</div>
              <div className="edit-profile-btn">Edit profile</div>
              <div>
                <FontAwesomeIcon icon={faGear} className="icon" />
              </div>
            </section>
            <section className="user-statistics">
              <div className="statistic-item">
                <div className="number">279</div>
                <div className="statistic-type">posts</div>
              </div>
              <div
                className="statistic-item"
                onClick={() => {
                  setPopupFollowercontent(<FollowerModal />);
                  togglePopup((p) => !p);
                }}
              >
                <div className="number">1,392</div>
                <div className="statistic-type">followers</div>
              </div>
              <div className="statistic-item">
                <div className="number">3,240</div>
                <div
                  className="statistic-type"
                  onClick={() => {
                    setPopupFollowingcontent(<FollowingModal />);
                    togglePopup((p) => !p);
                  }}
                >
                  following{" "}
                </div>
              </div>
            </section>
            <section className="user-bio">
              💕 Cat lover 💕 Cat lover 💕 Cat lover 💕 Cat lover 💕 Cat lover
              HCMUTE
            </section>
          </div>
        </div>
        <div className="ruler"></div>
        <div className="profile-main">
          <div className="profile-main__header">
            <Link>
              <div className="profile-main__header-item choosen">
                <FontAwesomeIcon icon={faTableList} className="icon" />
                posts
              </div>
            </Link>
            <Link>
              <div className="profile-main__header-item">
                <FontAwesomeIcon icon={faFilm} className="icon" />
                reels
              </div>
            </Link>
            <Link>
              <div className="profile-main__header-item">
                <FontAwesomeIcon icon={faDownload} className="icon" />
                saved
              </div>
            </Link>
            <Link>
              <div className="profile-main__header-item">
                <FontAwesomeIcon icon={faUserTag} className="icon" />
                tagged
              </div>
            </Link>
          </div>

          <div className="profile-post-list__col">
            <div className="profile-post-list__row">
              {posts.map((post) => {
                return <ProfilePost post={post} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
