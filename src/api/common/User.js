import { contextInstance } from "../axios";

/**
 * Create new user
 * @param User **người dùng**
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: tên hiển thị
 * - `birthday`: ngày sinh
 * - `avatar`: ảnh đại diện
 * - `profile`: Thông tin cá nhân
 * - `gender`: Giới tính
 * - `role`: Vai trò
 */
const createUser = async (user) => {
  return contextInstance.post(`common/user`, user);
};

/** Get friend for tag post */
const searchUserForPost = async (search) => {
  return contextInstance.get(
    `common/user/search-users-for-post?username.contains=${search}`
  );
};

/**
 * Get all users
 * @return
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: tên hiển thị
 * - `birthday`: ngày sinh
 * - `avatar`: ảnh đại diện
 * - `profile`: Thông tin cá nhân
 * - `gender`: Giới tính
 * - `role`: Vai trò
 */
const listUsers = async () => {
  return contextInstance.get(`common/user`);
};

/**
 * Get user by `id`
 * @param id id người dùng
 * @return
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: tên hiển thị
 * - `birthday`: ngày sinh
 * - `avatar`: ảnh đại diện
 * - `profile`: Thông tin cá nhân
 * - `gender`: Giới tính
 * - `role`: Vai trò
 */
const getUserById = async (id) => {
  return contextInstance.get(`common/user/${id}`);
};

/**
 * Get user by `username`
 * @param username username
 *  người dùng
 * @return
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: tên hiển thị
 * - `birthday`: ngày sinh
 * - `avatar`: ảnh đại diện
 * - `profile`: Thông tin cá nhân
 * - `gender`: Giới tính
 * - `role`: Vai trò
 */
const getUserByUsername = async (username) => {
  return contextInstance.get(`common/user`, {
    params: {
      "username.equal": username,
    },
  });
};

/**
 * Update user by `user.id`
 * @param User **người dùng**
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: tên hiển thị
 * - `birthday`: ngày sinh
 * - `avatar`: ảnh đại diện
 * - `profile`: Thông tin cá nhân
 * - `gender`: Giới tính
 * - `role`: Vai trò
 */
const updateUser = async (user, id) => {
  return contextInstance.put(`common/user/${id}/update`, user);
};

/**
 * Delete user by `user.id`
 * @param User **người dùng**
 */
const deleteUser = async (user) => {
  return contextInstance.delete(`common/user/${user.id}`);
};

const uploadUserImg = async (image) => {
  const formData = new FormData();
  formData.append("avatarFile", image);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return contextInstance.put(`common/user/update-avatar`, formData, config);
};

const changePassword = async (id, password) => {
  contextInstance.put(`/common/user/${id}/change-password`, password);
};

export {
  createUser,
  updateUser,
  getUserById,
  listUsers,
  deleteUser,
  searchUserForPost,
  getUserByUsername,
  uploadUserImg,
  changePassword,
};
