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

function ProfilePost({ postId }) {
  const { togglePopup, setPopupcontent } = useContext(PopupContext);
  useEffect(() => {
    setPopupcontent(<UserPost postId={postId} />);
  }, []);
  return (
    <div
      className="profile-post-wrapper"
      onClick={() => togglePopup((p) => !p)}
    >
      <Link>
        <img
          src="https://i.pinimg.com/564x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg"
          alt=""
        />
        <div className="profile-post-reactions">
          <div className="post-reaction-item">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>67</span>
          </div>
          <div className="post-reaction-item">
            <FontAwesomeIcon icon={faComment} className="icon" />
            <span>11</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePost;
