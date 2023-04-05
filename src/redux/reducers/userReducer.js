import {
  GET_ALL_USER_LOADING,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL,
} from "../actions/userAction";

const initialState = {
  userList: [],
  isLoading: false,
  error: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      };
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
  }
};
