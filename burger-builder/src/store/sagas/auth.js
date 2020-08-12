import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

const API_KEY = "AIzaSyC1Nb7sN-FeQfkj1bXIJgTRw4l0vYPeeFs";

function* logoutSaga() {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "userId");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield put(actions.authLogoutSuccess());
}

function* checkTokenExpireSaga({ expireTime }) {
  yield delay(expireTime * 1000);
  yield put(actions.authLogout());
}

function* authSaga({ email, password, isSignIn }) {
  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  if (isSignIn) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  }
  try {
    const res = yield call([axios, "post"], url, authData);
    const { idToken, localId, expiresIn } = res.data;
    yield call([localStorage, "setItem"], "token", idToken);
    yield call([localStorage, "setItem"], "userId", localId);
    yield call([localStorage, "setItem"], "expirationDate", new Date(new Date().getTime() + expiresIn * 1000));
    yield put(actions.authSuccess(res.data.idToken, res.data.localId));
    yield put(actions.checkTokenExpire(res.data.expiresIn));
  } catch (err) {
    yield put(actions.authFail(err.response.data.error));
  }
}

function* authCheckStateSaga() {
  const token = yield call([localStorage, "getItem"], "token");
  if (!token) {
    yield put(actions.authCheckStateDone());
    return;
  }

  const userId = yield call([localStorage, "getItem"], "userId");
  const expirationDateStr = yield call([localStorage, "getItem"], "expirationDate");
  const expirationDate = new Date(expirationDateStr);
  const now = new Date();
  if (expirationDate <= now) {
    yield put(actions.authLogout());
  } else {
    yield put(actions.authSuccess(token, userId));
    yield put(actions.checkTokenExpire((expirationDate.getTime() - now.getTime()) / 1000));
  }
  yield put(actions.authCheckStateDone());
}

export function* watchAuth() {
  yield all([
    takeLatest(actionTypes.AUTH_LOGOUT_START, logoutSaga),
    takeLatest(actionTypes.AUTH_CHECK_EXPIRE_TOKEN, checkTokenExpireSaga),
    takeLatest(actionTypes.AUTH_START, authSaga),
    takeLatest(actionTypes.AUTH_CHECKSTATE, authCheckStateSaga)
  ]);
}
