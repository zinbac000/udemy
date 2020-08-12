import * as actionTypes from "./actionTypes";

export const authSuccess = (idToken, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken,
  userId
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT_START
});

export const authLogoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT
});

export const checkTokenExpire = (expireTime) => ({
  type: actionTypes.AUTH_CHECK_EXPIRE_TOKEN,
  expireTime
});

export const auth = (email, password, isSignIn) => ({
  type: actionTypes.AUTH_START,
  email,
  password,
  isSignIn
});

export const setAuthRedirectPath = (path) => ({
  type: actionTypes.AUTH_SET_REDIRECT_PATH,
  path
});

export const authCheckStateDone = () => ({
  type: actionTypes.AUTH_CHECKSTATE_DONE
});

export const authCheckState = () => ({
  type: actionTypes.AUTH_CHECKSTATE
});
