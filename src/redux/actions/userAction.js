import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../api/toast/index";
import { CommonUserApi } from "../../api/common/index";
export const GET_ALL_USER_LOADING = "GET_ALL_USER_LOADING";
export const GET_ALL_USER_SUCCESS = "GET_ALL_USER_SUCCESS";
export const GET_ALL_USER_FAIL = "GET_ALL_USER_FAIL";

export const getAllUser = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_USER_LOADING,
  });
  CommonUserApi.listUsers((res) => {
    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: res.data.data,
    });
    handleSuccessResponse(res);
  }).catch((err) => {
    dispatch({
      type: GET_ALL_USER_FAIL,
      payload: err,
    });
    handleErrorResponse(err);
  });
};
