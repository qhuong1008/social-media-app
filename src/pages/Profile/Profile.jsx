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

function Profile() {
  const postId = "1";
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
              <div className="username">koyuki_chan01</div>
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
              <div className="statistic-item">
                <div className="number">1,392</div>
                <div className="statistic-type">followers</div>
              </div>
              <div className="statistic-item">
                <div className="number">3,240</div>
                <div className="statistic-type">following </div>
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
          <div className="profile-post-list">
            <ProfilePost postId={postId} />
            <ProfilePost postId={postId} />
            <ProfilePost postId={postId} />
            <ProfilePost postId={postId} />
            <ProfilePost postId={postId} />
            <ProfilePost postId={postId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
