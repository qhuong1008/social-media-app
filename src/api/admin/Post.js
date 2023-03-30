import { contextInstance } from "../axios";

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
    privacy: post.isPublic ? "PUBLIC" : "PRIVATE",
  };
  return contextInstance
    .post(`admin/post`, request)
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
  return contextInstance.get(`admin/post`);
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
  return contextInstance.get(`admin/post/${id}`);
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
    privacy: post.isPublic ? "PUBLIC" : "PRIVATE",
  };
  return contextInstance.put(`admin/post/${post.id}/update`, request);
};

/**
 * Delete post by `post.id`
 * @param Post **Bài đăng**
 */
const deletePost = async (post) => {
  return contextInstance.delete(`admin/post/${post.id}/delete`, post);
};

export { createPost, updatePost, getPostById, listPosts, deletePost };
