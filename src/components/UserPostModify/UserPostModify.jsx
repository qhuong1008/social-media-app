import { useEffect, useContext } from "react";
import Popup from "../Popup/index";
import { PopupContext } from "../../App";
import styles from "./UserPostModify.scss";

import PostForm from "../PostForm/PostForm";
import { deletePost } from "../../api/common/Post";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";

function UserPostModify({ post, onPostDeletedSuccess }, props) {
  const deletePostHandle = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này không ?"))
      deletePost(post.id)
        .then((res) => {
          handleSuccessResponse(res);
          if (typeof (onPostDeletedSuccess) === 'function') {
            onPostDeletedSuccess();
          }
          props.onCancel();
        })
        .catch((err) => {
          handleErrorResponse(err);
        });
  };
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };
  return (
    <div className="post-modify-wrapper">
      <ul>
        <li className="red" onClick={deletePostHandle}>
          Delete
        </li>
        <li
          onClick={() => {
            setPopupContentLevel(2, <PostForm post={post} />);
            togglePopupContentLevel(2);
          }}
        >
          Edit
        </li>
        <li>Hide like account</li>
        <li>Turn off something</li>
        <li>Go to post</li>
        <li>Share to...</li>
        <li>Copy link</li>
        <li>Embed</li>
        <li>About this account</li>
        <li
          onClick={() => {
            if (typeof props.onCancel === "function") {
              props.onCancel();
            }
          }}
        >
          Cancel
        </li>
      </ul>
    </div>
  );
}

export default UserPostModify;
