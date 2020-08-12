import { takeLatest, put, call } from "redux-saga/effects";
import axios from "../../axios-orders";

import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

function* submitOrderSaga({ newOrder, token }) {
  try {
    yield call([axios, "post"], `/orders.json?auth=${token}`, newOrder);
    yield put(actions.submitOrderSuccess());
  } catch (err) {
    yield put(actions.submitOrderFail());
  }
}

function* fetchOrderSaga({ token, userId }) {
  try {
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    const { data: orders } = yield call([axios, "get"], `/orders.json${queryParams}`);
    const transformedOrders = orders && Object.keys(orders).map((key) => ({ ...orders[key], id: key }));
    yield put(actions.fetchOrderSuccess(transformedOrders));
  } catch (err) {
    yield put(actions.fetchOrderFail());
  }
}

export function* watchOrder() {
  yield takeLatest(actionTypes.SUBMIT_ORDER_START, submitOrderSaga);
  yield takeLatest(actionTypes.FETCH_ORDERS_START, fetchOrderSaga);
}
