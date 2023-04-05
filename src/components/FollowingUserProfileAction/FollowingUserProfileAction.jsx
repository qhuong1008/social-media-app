import { useEffect, useContext } from "react";
import Popup from "../Popup/index";
import { PopupContext } from "../../App";
import styles from "./FollowingUserProfileAction.scss";

import PostForm from "../PostForm/PostForm";
import { deletePost } from "../../api/common/Post";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";

function FollowingUserProfileAction({ post }, props) {
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
    <div className="following-user-profile-action-wrapper">
      <div className="header">
        <img
          src="https://i.pinimg.com/564x/94/29/76/942976f5a1d91cbf8e51ab970044b1ae.jpg"
          alt=""
        />
        <div className="username">beluga002</div>
      </div>
      <div className="ruler"></div>
    </div>
  );
}

export default FollowingUserProfileAction;
