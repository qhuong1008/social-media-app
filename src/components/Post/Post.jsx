import style from "./Post.scss";
import {
  faComment,
  faHeart,
  faShareFromSquare,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Post() {
  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <div className="user">
            <div className="avt">
              <img
                src="https://i.pinimg.com/474x/65/90/f7/6590f7a352330539d159602b1588dffc.jpg"
                alt="username"
              />
            </div>
            <div className="info-wrapper">
              <div className="userInfo">
                <div className="username">koyuki_chan01</div>
                <div className="last-posted">• 1d</div>
              </div>
              <div className="song-src">Original Audio</div>
            </div>
          </div>
          <div className="more">
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
        <div className="post-content">
          <img
            src="https://i.pinimg.com/564x/33/19/38/3319388f960765cacbc8c82658276531.jpg"
            alt=""
          />
        </div>
        <div className="post-actions">
          <div className="main-action">
            <div className="action-item">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
            <div className="action-item">
              <FontAwesomeIcon icon={faComment} className="icon" />
            </div>
            <div className="action-item">
              <FontAwesomeIcon icon={faShareFromSquare} className="icon" />
            </div>
          </div>
          <div className="save-action">
            <FontAwesomeIcon icon={faBookmark} className="icon" />
          </div>
        </div>
        <div className="like-section">
          <div className="avt">
            <img
              src="https://i.pinimg.com/564x/4c/e3/0e/4ce30ec33dc777e2e6d39ae259ee87c2.jpg"
              alt=""
            />
          </div>
          <div className="like-num">
            Liked by
            <div className="person"> ryujin_itzy </div>
            and
            <div className="number"> 12,432 </div> others
          </div>
        </div>
        <div className="post-status">
          <div className="username">koyuki_chan01</div>
          <div className="status">2 3 con mực, anh yêu em cực 🖤</div>
          <div className="view-comments">View all comments</div>
        </div>
        <div className="post-new-comment">
          <input
            type="textarea"
            name=""
            value=""
            placeholder="Add a comment..."
          />
        </div>
      </div>
    </>
  );
}

export default Post;
