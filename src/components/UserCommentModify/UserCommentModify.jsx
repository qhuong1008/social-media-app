import React, { useContext } from "react";
import style from "./UserCommentModify.scss";

import { PopupContext } from "../../App";
import { handleErrorResponse, handleSuccessResponse } from "../../api/toast";

import CommentForm from "../CommentForm/CommentForm";

import { deleteComment } from "../../api/common/Comment";

function UserCommentModify({ comment }, props) {
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const setPopupcontent = (content) => {
    setPopupContentLevel(0, content);
  };

  const togglePopup = () => {
    togglePopupContentLevel(0);
  };

  const deleteCommentHandler = () => {
    if (window.confirm("Bạn có chắc muốn xóa comment này không ?"))
      deleteComment(comment.id)
        .then((res) => {
          if (res.data.status === "OK") handleSuccessResponse(res);
          else handleErrorResponse(res);
        })
        .then((err) => handleErrorResponse(err))
        .finally(togglePopupContentLevel(1));
  };

  return (
    <>
      <div className="comment-modify-wrapper">
        <ul>
          <li style={{ color: "red" }} onClick={() => deleteCommentHandler()}>
            Delete
          </li>
          <li
            onClick={() => {
              setPopupContentLevel(2, <CommentForm comment={comment} />);
              togglePopupContentLevel(2);
            }}
          >
            Edit
          </li>
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
    </>
  );
}

export default UserCommentModify;
