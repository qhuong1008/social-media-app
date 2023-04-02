import styles from "./UserPost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFaceSmile,
  faPaperPlane,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useContext } from "react";
import { PopupContext } from "../../App";
import UserPostModify from "../../components/UserPostModify/UserPostModify";
function UserPost({ post }) {
  const content = JSON.parse(post.content).data;
  const {
    togglePopupContentLevel,
    setPopupContentLevel,
    hidePopupContentLevel,
  } = useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  // useEffect(() => {
  //   setPopupcontent(<UserPostModify />);
  // }, []);
  return (
    <div className="user-post-wrapper">
      <div className="post-image">
        <img src={content.images[0]} alt="post image" />
      </div>
      <div className="post-info">
        <div className="post-info-header">
          <div className="post-account">
            <img
              src="https://i.pinimg.com/236x/f2/b2/08/f2b2089eeef0335894ba6649aec02350.jpg"
              alt=""
            />
            <div className="post-account-username">koyukichan_01</div>
          </div>
          <div
            className="more"
            onClick={() => {
              setPopupContentLevel(
                1,
                <UserPostModify onCancel={() => hidePopupContentLevel(1)} />
              );
              togglePopupContentLevel(1);
            }}
          >
            <svg
              aria-label="More options"
              class="_ab6-"
              color="rgb(38, 38, 38)"
              fill="rgb(38, 38, 38)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div className="ruler"></div>
        <div className="post-status-wrapper">
          <div className="post-status">
            <div className="post-avt">
              <img
                src="https://i.pinimg.com/236x/f2/b2/08/f2b2089eeef0335894ba6649aec02350.jpg"
                alt=""
              />
            </div>
            <div className="post-status-desc">
              <span>koyukichan_01:</span>
              <div className="post-desc">
                {content.contents.map((content) => {
                  return <div className="status">{content}</div>;
                })}
              </div>
            </div>
          </div>
          <div className="comment-list">
            <div className="comment-item">
              <div className="user">
                <img
                  src="https://i.pinimg.com/564x/e6/a4/08/e6a408fc2c6e78591bd084e27303bfaf.jpg"
                  alt=""
                />
              </div>
              <div className="comment">
                <div className="comment-desc">
                  <div className="comment-desc-info">
                    <span>cutecat</span> wow so cute
                  </div>
                  <div className="comment-sub">
                    <div className="time">39w</div>
                    <div className="reply">Reply</div>
                  </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="post-action-wrapper">
          <div className="post-action-list">
            <div className="post-action-item">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="post-action-item">
              <FontAwesomeIcon icon={faComment} className="icon" />
            </div>
            <div className="post-action-item">
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </div>
          </div>
          <div className="post-action-save">
            <FontAwesomeIcon icon={faSave} className="icon" />
          </div>
        </div>
        <div className="post-statistic">
          <div className="first-three-users">
            <div className="first-three-users-item">
              <img
                src="https://i.pinimg.com/564x/43/ff/a5/43ffa5a6e22e7fe13bea1036c23bb196.jpg"
                alt=""
              />
            </div>
            <div className="first-three-users-item">
              <img
                src="https://i.pinimg.com/564x/f7/c1/4f/f7c14f63ec04922b059eb965511cc89b.jpg"
                alt=""
              />
            </div>
            <div className="first-three-users-item">
              <img
                src="https://i.pinimg.com/564x/bd/73/9c/bd739c0d19e0ed209e151ccf7901ffc2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="post-likes">
            <span>
              Liked by <span className="username">pumpkin_purrs</span> and 66
              others
            </span>
          </div>
        </div>
        <div className="ruler"></div>
        <div className="account-comment">
          <div className="comment-icons">
            <FontAwesomeIcon icon={faFaceSmile} className="icon" />
          </div>
          <div className="comment-input">
            <input type="text" name="" placeholder="Add a comment..." />
          </div>
          <div className="post-btn">Post</div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
