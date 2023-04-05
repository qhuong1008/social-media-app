import { contextInstance } from "../axios";

const POST_PRIVACY_TYPE = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
};

const POST_CONTENT_TYPE = {
  /**
   * Text and image post content
   */
  TI_POST: "TI_POST",
};

const INTERFACE_TI_POST_CONTENT = {
  meta: {
    type: POST_CONTENT_TYPE.TI_POST,
    version: "1.0.0",
  },

  data: {
    images: [],
    contents: [],
  },
};

/**
 * Create new post
 * @param Post **Bài đăng**
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 *
 * - `authorId`: người đăng
 */
const createPost = async (post) => {
  const request = {
    content: JSON.stringify(post.content),
    privacy: post.isPublic
      ? POST_PRIVACY_TYPE.PUBLIC
      : POST_PRIVACY_TYPE.PRIVATE,
  };
  return contextInstance
    .post(`common/post`, request)
    .catch((err) => console.log(err));
};

/**
 * Get all posts
 * @return
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 *
 * - `authorId`: người đăng
 */
const listPosts = async () => {
  return contextInstance.get(`common/post`);
};

/**
 * Get all posts from a user
 * @return
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 *
 * - `authorId`: người đăng
 */
const listPostsFromUser = async (uid) => {
  return contextInstance.get(`common/post?author.equal=${uid}`);
};

/**
 * Get post by `id`
 * @param id id Bài đăng
 * @return
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 *
 * - `authorId`: người đăng
 */
const getPostById = async (id) => {
  return contextInstance
    .get(`common/post/${id}`)
    .catch((err) => console.log(err));
};

/**
 * Update post by `post.id`
 * @param Post **Bài đăng**
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 *
 * - `authorId`: người đăng
 */
const updatePost = async (post) => {
  const request = {
    content: JSON.stringify(post.content),
    privacy: post.isPublic
      ? POST_PRIVACY_TYPE.PUBLIC
      : POST_PRIVACY_TYPE.PRIVATE,
  };
  return contextInstance
    .put(`common/post/${post.id}/update`, request)
    .catch((err) => console.log(err));
};

/**
 * Delete post by `post.id`
 * @param Post **Bài đăng**
 */
const deletePost = async (id) => {
  return contextInstance.delete(`common/post/${id}/delete`);
};

export {
  createPost,
  updatePost,
  getPostById,
  listPosts,
  listPostsFromUser,
  deletePost,
  POST_PRIVACY_TYPE,
  POST_CONTENT_TYPE,
  INTERFACE_TI_POST_CONTENT,
};
