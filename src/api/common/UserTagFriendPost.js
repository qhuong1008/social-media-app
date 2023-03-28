import { contextInstance } from "../axios";

/**
 * Create new userTagFriendPost
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 *
 */
const createUserTagFriendPost = async (userTagFriendPost) => {
  return contextInstance.post(`common/user-tag-friend-post`, userTagFriendPost);
};

/**
 * Get all userTagFriendPosts
 * @return
 *
 */
const listUserTagFriendPosts = async () => {
  return contextInstance.get(`common/user-tag-friend-post`);
};

/**
 * Get userTagFriendPost by `id`
 * @param id id Tag bạn bè của bài đăng
 * @return
 *
 */
const getUserTagFriendPostById = async (id) => {
  return contextInstance.get(`common/user-tag-friend-post/${id}`);
};

/**
 * Update userTagFriendPost by `userTagFriendPost.id`
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 *
 */
const updateUserTagFriendPost = async (userTagFriendPost) => {
  return contextInstance.put(
    `common/user-tag-friend-post/${userTagFriendPost.id}`
  );
};

/**
 * Delete userTagFriendPost by `userTagFriendPost.id`
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 */
const deleteUserTagFriendPost = async (userTagFriendPost) => {
  return contextInstance.delete(
    `common/user-tag-friend-post/${userTagFriendPost.id}`
  );
};

export {
  createUserTagFriendPost,
  updateUserTagFriendPost,
  getUserTagFriendPostById,
  listUserTagFriendPosts,
  deleteUserTagFriendPost,
};
