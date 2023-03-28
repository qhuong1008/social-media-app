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
const listComments = async () => {
  return contextInstance.get(`common/comment`);
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
  return contextInstance.put(`common/comment/${comment.id}`);
};

/**
 * Delete comment by `comment.id`
 * @param Comment **Bình luận**
 */
const deleteComment = async (comment) => {
  return contextInstance.delete(`common/comment/${comment.id}`);
};

export {
  createComment,
  updateComment,
  getCommentById,
  listComments,
  deleteComment,
};
