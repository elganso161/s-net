import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};

//redux-thunk
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

//redux-thunk
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
//redux-thunk
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
