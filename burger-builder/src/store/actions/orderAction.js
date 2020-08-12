import * as actionTypes from "./actionTypes";

export const submitOrderSuccess = () => ({
  type: actionTypes.SUBMIT_ORDER_SUCCESS
});

export const submitOrderFail = () => ({
  type: actionTypes.SUBMIT_ORDER_FAIL
});

export const submitOrder = (newOrder, token) => ({
  type: actionTypes.SUBMIT_ORDER_START,
  newOrder,
  token
});

export const initPurchase = () => ({
  type: actionTypes.INIT_PURCHASE
});

export const fetchOrderSuccess = (orders) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders
});

export const fetchOrderFail = () => ({
  type: actionTypes.FETCH_ORDERS_FAIL
});

export const fetchOrders = (token, userId) => ({
  type: actionTypes.FETCH_ORDERS_START,
  token,
  userId
});
