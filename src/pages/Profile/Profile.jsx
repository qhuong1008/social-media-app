import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faDownload,
  faEllipsis,
  faFilm,
  faGear,
  faTableList,
  faUserPlus,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import CommonSidebar from "../../components/Sidebar/CommonSidebar/CommonSidebar";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { listPostsFromUser } from "../../api/common/Post";
import { PopupContext } from "../../App";
import FollowerModal from "../../components/FollowerModal/FollowerModal";
import FollowingModal from "../../components/FollowingModal/FollowingModal";
import UserProfileActionModal from "../../components/UserProfileActionModal/UserProfileActionModal";
import FollowingUserProfileAction from "../../components/FollowingUserProfileAction/FollowingUserProfileAction";
import { CommonFollowerApi } from "../../api/common";
import { CommonPostApi } from "../../api/common";
import avatar from "../../assets/img/avt.jpg";
import { useParams } from "react-router-dom";
import MiniSidebar from "../../components/Sidebar/MiniSidebar/MiniSidebar";
import { getUserByUsername } from "../../api/common/User";
import { handleErrorMessage } from "../../api/toast";
import { toggleFollow } from "../../api/common/Follower";


function Profile() {
  const user = JSON.parse(localStorage.getItem("USER_INFO"));  
  const uid = user.id;
  const params = useParams();
  const [userView, setUserView] = useState({});
  const navigate = useNavigate();
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    let { username } = params;
    if (username == null) {
      username = user.username;
      setUserView(user);
    }
    getUserByUsername(username).then((resp) => {
      if (resp.data.data.length === 0) {
        handleErrorMessage('Không tìm thấy user này');
        navigate("/");
      }
      console.log(resp);
      setUserView(resp.data.data[0]);
      setIsFollowed(resp.data.data[0].followed);
    });
  },[]);
 

  const [posts, setPosts] = useState([]);

  const { togglePopupContentLevel, setPopupContentLevel, hidePopupContentLevel } =
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

  const setPopupActioncontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const setCurrentUserProfileContent = (content) => {
    setPopupContentLevel(0, content);
  };

  const [listFollowers, setListFollowers] = useState([]);
  const [listFollowing, setListFollowing] = useState([]);
  const [listPosts, setListPosts] = useState([]);

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

  function fetchListFollowers() {
    return CommonFollowerApi.listFollowers()
    .then ((response) => {
        const fetchListFollowers = response.data.data.map((follower, index) => {
            const temp = { ...follower };
            return temp;
        });
        setListFollowers(fetchListFollowers);
    })}

  function fetchListPosts() {
    if (userView.id == user.id) {
      return CommonPostApi.getMyPosts()
      .then ((response) => {
        console.log(response);
          const fetchListPosts = response.data.data.map((post, index) => {
              const temp = { ...post };
              return temp;
          });
          setListPosts(fetchListPosts);
      })
      .catch((error) => {});
    } 
    else {
      return CommonPostApi.getPostsByUserId(userView.id)
      .then ((response) => {
        console.log(response);
          const fetchListPosts = response.data.data.map((post, index) => {
              const temp = { ...post };
              return temp;
          });
          setListPosts(fetchListPosts);
      })
      .catch((error) => {});
    }
  }

  const toggleFollowOnClick = () => {
    toggleFollow(userView.id).then((resp) => {
      setIsFollowed(!isFollowed);
    });
  }
  
  useEffect(() => {
    setPopupFollowercontent(<FollowerModal />);
    setPopupFollowingcontent(<FollowingModal />);
    setPopupActioncontent(<UserProfileActionModal />);
    setCurrentUserProfileContent(<FollowingUserProfileAction />);
    fetchListFollowing();
    fetchListFollowers();

  }, []);

  useEffect(() => {
    if (userView.id != null) {
      fetchListPosts();
    }
  }, [userView]);
  
  return (
    <div className="profile-container">
      <CommonSidebar />
      <MiniSidebar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-img">
            <img src={userView.avatar} alt="avatar" />
          </div>
          <div className="profile-info">
            <section className="user-profile">
              <div className="username">{userView.username}</div>
              {userView.id == user.id ? (<>
                <div className="edit-profile-btn">Edit profile</div>
                <div>
                  <FontAwesomeIcon icon={faGear} className="icon" />
                </div>
                </>
                ) : (
                  <>
                    {isFollowed ? (
                      <div
                        className="following-btn"
                        onClick={() => {
                          setPopupActioncontent(<FollowingUserProfileAction onUnFollowClicked={() => {
                            toggleFollowOnClick();
                            hidePopupContentLevel(0);
                          }} />);
                          togglePopup();
                        }}
                      >
                        Following
                        <FontAwesomeIcon icon={faChevronDown} className="icon" />
                      </div>
                    ) : (
                      <div className="follow-profile-btn" onClick={toggleFollowOnClick}>Follow</div>
                    )}
                  </>
                  )}
            </section>
            <section className="user-statistics">
              <div className="statistic-item">
                <div className="number">{listPosts.length}</div>
                <div className="statistic-type">posts</div>
              </div>
              <div
                className="statistic-item"
                onClick={() => {
                  setPopupFollowercontent(<FollowerModal />);
                  togglePopup((p) => !p);
                }}
              >
                <div className="number">{listFollowers.length}</div>
                <div className="statistic-type">followers</div>
              </div>
              <div className="statistic-item">
                <div className="number">{listFollowing.length}</div>
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
              {userView.profile}
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
              {listPosts.map((post) => {
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
