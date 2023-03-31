import { authInstance } from "../axios";

/**
 * User login
 * @param User **Thông tin đăng nhập**
 *
 * - `username`: Tên người dùng
 * - `password`: Mật khẩu
 */
const authLogin = async (user) => {
  return authInstance.post(`login`, user);
};

/**
 * @param User **đăng ký tài khoản**
 *
 * - `username`: tên người dùng
 * - `password`: mật khẩu
 * - `displayName`: họ và tên
 * - `email`: email đăng ký
 *
 * > Note: xem validate dữ liệu tại: `useraggregate.services.UserServiceImpl.register()`
 */
const registerUser = async (user) => {
  return authInstance.post(`signup`, user);
};

export { authLogin };
