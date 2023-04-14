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

function FollowingUserProfileAction({ post, onUnFollowClicked }, props) {
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
    // <div className="following-user-profile-action-wrapper">
    //   <div className="header">
    //     <img
    //       src="https://i.pinimg.com/564x/94/29/76/942976f5a1d91cbf8e51ab970044b1ae.jpg"
    //       alt=""
    //     />
    //     <div className="username">beluga002</div>
    //   </div>
    //   <div className="ruler"></div>
    // </div>

    // TODO: fix tạm thời nhớ sửa lại sau

    <div className="post-modify-wrapper">
      <ul>
        <li className="red">Report</li>
        <li className="red" onClick={() => {
          if (typeof onUnFollowClicked === 'function') onUnFollowClicked();
        }}>Unfollow</li>
        <li>Add to favourites</li>
        <li>Go to post</li>
        <li>Share to...</li>
        <li>Copy link</li>
        <li>Embed</li>
        <li>Cancel</li>
      </ul>
    </div>
  );
}

export default FollowingUserProfileAction;
