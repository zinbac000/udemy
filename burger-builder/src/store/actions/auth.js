import * as actionTypes from "./actionTypes";

import axios from "axios";

const API_KEY = "AIzaSyC1Nb7sN-FeQfkj1bXIJgTRw4l0vYPeeFs";

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (idToken, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken,
  userId
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkTokenExpire = (expireTime) => (dispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(authLogout());
    clearTimeout(timeoutId);
  }, expireTime * 1000);
};

export const auth = (email, password, isSignIn) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  if (isSignIn) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  }

  axios
    .post(url, authData)
    .then((res) => {
      const { idToken, localId, expiresIn } = res.data;
      localStorage.setItem("token", idToken);
      localStorage.setItem("userId", localId);
      localStorage.setItem("expirationDate", new Date(new Date().getTime() + expiresIn * 1000));
      dispatch(authSuccess(res.data.idToken, res.data.localId));
      dispatch(checkTokenExpire(res.data.expiresIn));
    })
    .catch((err) => dispatch(authFail(err.response.data.error)));
};

export const setAuthRedirectPath = (path) => ({
  type: actionTypes.AUTH_SET_REDIRECT_PATH,
  path
});

const authCheckStateDone = () => ({
  type: actionTypes.AUTH_CHECKSTATE_DONE
});

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(authCheckStateDone());
    return;
  }

  const userId = localStorage.getItem("userId");
  const expirationDate = new Date(localStorage.getItem("expirationDate"));
  const now = new Date();
  if (expirationDate <= now) {
    dispatch(authLogout());
  } else {
    dispatch(authSuccess(token, userId));
    dispatch(checkTokenExpire((expirationDate.getTime() - now.getTime()) / 1000));
  }
  dispatch(authCheckStateDone());
};
