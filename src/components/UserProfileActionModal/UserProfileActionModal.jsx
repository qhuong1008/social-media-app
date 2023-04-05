import { useEffect, useContext } from "react";
import Popup from "../Popup/index";
import { PopupContext } from "../../App";
import styles from "./UserProfileActionModal.scss";

import PostForm from "../PostForm/PostForm";
import { deletePost } from "../../api/common/Post";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";

function UserProfileActionModal({ post }, props) {
  const deletePostHandle = () => {
    if (window.confirm("Are you sure you want to delete this post?"))
      deletePost(post.id)
        .then((res) => {
          handleSuccessResponse(res);
          props.onCancel();
        })
        .catch((err) => {
          handleErrorResponse(err);
        });
  };

  return (
    <div className="post-modify-wrapper">
      <ul>
        <li className="red" onClick={deletePostHandle}>
          Block
        </li>
        <li className="red">Restrict</li>
        <li className="red">Report</li>

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

export default UserProfileActionModal;
