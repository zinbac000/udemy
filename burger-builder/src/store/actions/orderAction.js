import * as actionTypes from "./actionTypes";

import axios from "../../axios-orders";

const submitOrderStart = () => ({
  type: actionTypes.SUBMIT_ORDER_START
});

const submitOrderSuccess = () => ({
  type: actionTypes.SUBMIT_ORDER_SUCCESS
});

const submitOrderFail = () => ({
  type: actionTypes.SUBMIT_ORDER_FAIL
});

export const submitOrder = (newOrder, token) => (dispatch) => {
  dispatch(submitOrderStart());
  axios
    .post(`/orders.json?auth=${token}`, newOrder)
    .then((res) => dispatch(submitOrderSuccess()))
    .catch((err) => dispatch(submitOrderFail()));
};

export const initPurchase = () => ({
  type: actionTypes.INIT_PURCHASE
});

const fetchOrderStart = () => ({
  type: actionTypes.FETCH_ORDERS_START
});

const fetchOrderSuccess = (orders) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders
});

const fetchOrderFail = () => ({
  type: actionTypes.FETCH_ORDERS_FAIL
});

export const fetchOrders = (token) => (dispatch) => {
  dispatch(fetchOrderStart());
  axios
    .get(`/orders.json?auth=${token}`)
    .then((res) => res.data)
    .then((orders) => {
      const transformedOrders = orders && Object.keys(orders).map((key) => ({ ...orders[key], id: key }));
      dispatch(fetchOrderSuccess(transformedOrders));
    })
    .catch((err) => dispatch(fetchOrderFail()));
};
