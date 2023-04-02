import style from "./Post.scss";
import {
  faComment,
  faHeart,
  faShareFromSquare,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { PopupContext } from "../../App";
import { useState, useEffect, useContext } from "react";
import PostModify from "../PostModify/PostModify";
import defaultAvatar from "../../images/default-avatar.jpg";

function Post({post}) {
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const content = JSON.parse(post.content);
  let { images, contents } = content.data;
  images = images || [];
  contents = contents || [];
  const time = new Date() - new Date(post.createdAt);
  let postedAgo = "";

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  useEffect(() => {
    setPopupcontent(<PostModify />);
  }, []);

  const postedTime = Math.floor(time / 1000);
  if (postedTime < 60) {
    postedAgo = postedTime + "s";
  } else if (postedTime < 3600) {
    postedAgo = Math.floor(postedTime / 60) + "m";
  } else if (postedTime < 86400) {
    postedAgo = Math.floor(postedTime / 3600) + "h";
  } else {
    postedAgo = Math.floor(postedTime / 86400) + "d";
  }
  console.log();
  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <div className="user">
            <div className="avt">
              <img
                src={post.avatar != null ? post.avatar : defaultAvatar}
                alt="username"
              />
            </div>
            <div className="info-wrapper">
              <div className="userInfo">
                <div className="username">{post.username}</div>
                <div className="last-posted">• {postedAgo}</div>
              </div>
              <div className="song-src">Original Audio</div>
            </div>
          </div>
          <div className="more" onClick={() => togglePopup((p) => !p)}>
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
          {/* TODO: nhớ đây là danh sách ảnh, nhớ design lại */}
          {images.map(url => {
            return (
              <img src={url}></img>
            )
          })}
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
              src={post.avatar != null ? post.avatar : defaultAvatar}
              alt=""
            />
          </div>
          <div className="like-num">
            Liked by
            <div className="person"> {post.username} </div>
            and
            <div className="number"> 12,432 </div> others
          </div>
        </div>
        <div className="post-status">
          <div className="username">{post.username}</div>
          {/* TODO: nhớ đây là danh sách ảnh, nhớ design lại */}
          {contents.map(content => {
            return (
              <div className="status">{content}</div>
            )
          })}
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
