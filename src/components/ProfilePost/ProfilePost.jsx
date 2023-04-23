import styles from "./ProfilePost.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComment,
  faDownload,
  faFilm,
  faGear,
  faHeart,
  faTableList,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { PopupContext } from "../../App";
import { useEffect, useContext } from "react";
import UserPost from "../../components/UserPost/UserPost";

function ProfilePost({ post }) {
  const content = JSON.parse(post.content).data;
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  const setProfilePopupContent = () => {
    setPopupcontent(<UserPost post={post} />);
  };

  useEffect(() => {
    setProfilePopupContent();
  }, []);
  return (
    <div
      className="profile-post-wrapper"
      onClick={() => {
        setProfilePopupContent();
        togglePopup((p) => !p);
      }}
    >
      <Link>
        <img src={content.images[0]} alt="" />
        <div className="profile-post-reactions">
          <div className="post-reaction-item">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>{post.totalReact}</span>
          </div>
          <div className="post-reaction-item">
            <FontAwesomeIcon icon={faComment} className="icon" />
            <span>{post.totalComment}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePost;
