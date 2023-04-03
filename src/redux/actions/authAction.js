import { Navigate, useNavigate } from "react-router-dom";
import { authLogin, registerUser } from "../../api/auth/index";
import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";
import { ACCESS_TOKEN_KEY_NAME, USER_KEY_NAME } from "../../types";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const LOGOUT = "LOGOUT";

export const handleLogin = (username, password) => async (dispatch) => {
  const preparedUserAuth = { username, password };
  return authLogin(preparedUserAuth)
    .then((resp) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp,
      });
      const { user, accessToken } = resp.data.data;
      localStorage.setItem(ACCESS_TOKEN_KEY_NAME, accessToken);
      localStorage.setItem(USER_KEY_NAME, JSON.stringify(user));
      handleSuccessResponse(resp);
      return true;
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
      handleErrorResponse(err);
      return false;
    });
};
export const handleRegisterUser = (user) => async (dispatch) => {
  registerUser(user)
    .then((resp) => {
      dispatch({
        type: SIGN_UP_SUCCESS,
      });
      handleSuccessResponse(resp);
    })
    .catch((err) => {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: err,
      });
      handleErrorResponse(err);
    });
};
export const handleLogout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  dispatch({
    type: LOGOUT,
  });
};
