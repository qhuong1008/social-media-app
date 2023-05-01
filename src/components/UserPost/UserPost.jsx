import styles from "./UserPost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFaceSmile,
  faPaperPlane,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHearFull } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../../App";
import UserPostModify from "../../components/UserPostModify/UserPostModify";

import defaulAvatar from "../../assets/img/avt.jpg";
import turnArrow from "../../assets/img/arrow.png";
import { toggleLike } from "../../api/common/Reaction";
import { createComment, listComments } from "../../api/common/Comment";
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

  const [like, setLike] = useState(post.isReacted);
  const reactHandler = () => {
    setLike(!like);
    toggleLike({
      id: post.id,
    });
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      const res = await listComments(post.id);
      setComments(res.data.data);
    };
    fetchComment();
  }, []);

  function calcTimeAgo(createdAt) {
    var postedAgo = "";
    var time = new Date() - new Date(createdAt);
    var postedTime = Math.floor(time / 1000);
    if (postedTime < 60) {
      postedAgo = postedTime + "s";
    } else if (postedTime < 3600) {
      postedAgo = Math.floor(postedTime / 60) + "m";
    } else if (postedTime < 86400) {
      postedAgo = Math.floor(postedTime / 3600) + "h";
    } else {
      postedAgo = Math.floor(postedTime / 86400) + "d";
    }
    return postedAgo;
  }

  const [parentComment, setParentComment] = useState({});

  const [commentContent, setCommentContent] = useState("");

  const submitCommentHandler = async (parentId) => {
    if (commentContent !== "") {
      const comment = {
        content: commentContent,
        postId: post.id,
        parentId: parentComment.id,
      };
      const res = await createComment(comment);
      if (res.data.status === "OK") setComments(comments.concat(res.data.data));
    }
    setCommentContent("");
  };

  const replyCommentHandler = (comment) => {
    setParentComment(comment);
  };

  // useEffect(() => {
  //   setPopupcontent(<UserPostModify />);
  // }, []);

  return (
    <div className="user-post-wrapper">
      <div className="post-image">
        <img src={content.images[0]} alt="" />
      </div>
      <div className="post-info">
        <div className="post-info-header">
          <div className="post-account">
            <img
              src={post.avatar != null ? post.avatar : defaulAvatar}
              alt=""
            />
            <div className="post-account-username">{post.username}</div>
          </div>
          <div
            className="more"
            onClick={() => {
              setPopupContentLevel(
                1,
                <UserPostModify
                  post={post}
                  onCancel={() => hidePopupContentLevel(1)}
                />
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
                src={post.avatar != null ? post.avatar : defaulAvatar}
                alt=""
              />
            </div>
            <div className="post-status-desc">
              <span>{post.username}</span>
              <div className="post-desc">
                {content.contents.map((content) => {
                  return <div className="status">{content}</div>;
                })}
              </div>
            </div>
          </div>
          <div className="comment-list">
            {comments.map((comment) => {
              if (comment.parentId === null)
                return (
                  <>
                    <div className="comment-item">
                      <div className="parent-comment">
                        <div className="user">
                          <img
                            src={
                              comment.avatar !== undefined
                                ? comment.avatar
                                : defaulAvatar
                            }
                            alt=""
                          />
                        </div>
                        <div className="comment">
                          <div className="comment-desc">
                            <div className="comment-desc-info">
                              <span>{comment.username}</span> {comment.content}
                            </div>
                            <div className="comment-sub">
                              <div className="time">
                                {calcTimeAgo(comment.createdAt)}
                              </div>
                              <div
                                className="reply"
                                onClick={() => replyCommentHandler(comment)}
                              >
                                Reply
                              </div>
                            </div>
                          </div>
                          <FontAwesomeIcon icon={faHeart} className="icon" />
                        </div>
                      </div>

                      {comments.map((childComment) => {
                        if (childComment.parentId === comment.id)
                          return (
                            <>
                              <div className="child-comment">
                                <img
                                  className="turn-arrow"
                                  src={turnArrow}
                                  alt=""
                                />
                                <div className="user">
                                  <img
                                    src={
                                      childComment.avatar !== undefined
                                        ? childComment.avatar
                                        : defaulAvatar
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="comment">
                                  <div className="comment-desc">
                                    <div className="comment-desc-info">
                                      <span>{childComment.username}</span>{" "}
                                      {childComment.content}
                                    </div>
                                    <div className="comment-sub">
                                      <div className="time">
                                        {calcTimeAgo(childComment.createdAt)}
                                      </div>
                                    </div>
                                  </div>
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    className="icon"
                                  />
                                </div>
                              </div>
                            </>
                          );
                      })}
                    </div>
                  </>
                );
            })}
          </div>
        </div>
        <div className="post-action-wrapper">
          <div className="post-action-list">
            <div className="post-action-item" onClick={() => reactHandler()}>
              {like ? (
                <FontAwesomeIcon
                  icon={faHearFull}
                  className="icon"
                  style={{ color: "rgb(255, 99, 127)" }}
                />
              ) : (
                <FontAwesomeIcon icon={faHeart} className="icon" />
              )}
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
            {[1, 2, 3].map((index) => {
              if (comments[index] !== undefined)
                return (
                  <>
                    <div className="first-three-users-item">
                      <img
                        src={
                          comments[index].avatar !== null
                            ? comments[index].avatar
                            : defaulAvatar
                        }
                        alt=""
                      />
                    </div>
                  </>
                );
            })}
          </div>
          <div className="post-likes">
            <span>
              Liked by
              {" " + post.totalReact + " "}
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
            <p>
              {parentComment.username !== undefined
                ? "@" + parentComment.username
                : ""}
            </p>
            <input
              type="text"
              name=""
              placeholder="Add a comment..."
              value={commentContent}
              onChange={(e) => {
                setCommentContent(e.target.value);
              }}
            />
          </div>
          <div className="post-btn" onClick={() => submitCommentHandler()}>
            Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
