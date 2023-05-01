import { contextInstance } from "../axios";

/**
 * Create new comment
 * @param Comment **Bình luận**
 *
 * - `content`: Nội dung
 */
const createComment = async (comment) => {
  return contextInstance.post(`common/comment`, comment);
};

/**
 * Get all comments
 * @return
 *
 * - `content`: Nội dung
 */
const listComments = async (id) => {
  return contextInstance.get(`common/comment?post.id.equal=${id}`);
};

/**
 * Get comment by `id`
 * @param id id Bình luận
 * @return
 *
 * - `content`: Nội dung
 */
const getCommentById = async (id) => {
  return contextInstance.get(`common/comment/${id}`);
};

/**
 * Update comment by `comment.id`
 * @param Comment **Bình luận**
 *
 * - `content`: Nội dung
 */
const updateComment = async (comment) => {
  return contextInstance.put(`common/comment/${comment.id}/update`, comment);
};

/**
 * Delete comment by `comment.id`
 * @param Comment **Bình luận**
 */
const deleteComment = async (id) => {
  return contextInstance.delete(`common/comment/${id}/delete`);
};

export {
  createComment,
  updateComment,
  getCommentById,
  listComments,
  deleteComment,
};
