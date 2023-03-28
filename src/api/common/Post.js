import { contextInstance } from "../axios";

/**
 * Create new post
 * @param Post **Bài đăng**
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 */
const createPost = async (post) => {
  return contextInstance.post(`common/post`, post);
};

/**
 * Get all posts
 * @return
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 */
const listPosts = async () => {
  return contextInstance.get(`common/post`);
};

/**
 * Get post by `id`
 * @param id id Bài đăng
 * @return
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 */
const getPostById = async (id) => {
  return contextInstance.get(`common/post/${id}`);
};

/**
 * Update post by `post.id`
 * @param Post **Bài đăng**
 *
 * - `content`: Nội dung bài đăng
 * - `privacy`: Quyền riêng tư
 */
const updatePost = async (post) => {
  return contextInstance.put(`common/post/${post.id}`);
};

/**
 * Delete post by `post.id`
 * @param Post **Bài đăng**
 */
const deletePost = async (post) => {
  return contextInstance.delete(`common/post/${post.id}`);
};

export { createPost, updatePost, getPostById, listPosts, deletePost };
