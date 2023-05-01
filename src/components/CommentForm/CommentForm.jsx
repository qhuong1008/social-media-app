import React, { useState, useContext } from "react";
import style from "./CommentForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { handleErrorResponse, handleSuccessResponse } from "../../api/toast";
import { PopupContext } from "../../App";

import { updateComment } from "../../api/common/Comment";

function CommentForm({ comment }) {
  const { togglePopupContentLevel, setPopupContentLevel } =
    useContext(PopupContext);

  const [content, setContent] = useState(comment.content);

  const submitUpdateCommentHandler = () => {
    const req = {
      id: comment.id,
      content: content,
      postId: comment.postId,
      parentId: comment.parentId,
    };
    updateComment(req)
      .then((res) => {
        console.log(res);
        if (res.data.status === "OK") {
          handleSuccessResponse(res);
        } else {
          handleErrorResponse(res);
        }
      })
      .catch((err) => handleErrorResponse(err))
      .finally(togglePopupContentLevel(2));
  };

  return (
    <>
      <div className="update-comment-wrapper">
        <h2>Edit Comment</h2>
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="update-comment-btn"
          onClick={() => submitUpdateCommentHandler()}
        >
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </button>
      </div>
    </>
  );
}

export default CommentForm;
