import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  LOGOUT,
} from "../actions/authAction";

const initialState = {
  user: null,
  accessToken: "",
  error: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        accessToken: "",
      };
    default:
      return state;
  }
};
