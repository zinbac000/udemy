import * as actionTypes from "./actionTypes";

import axios from "../../axios-orders";

export const submitOrder = (newOrder) => (dispatch) => {
  dispatch({ type: actionTypes.SUBMIT_ORDER_START });
  axios
    .post("/orders.json", newOrder)
    .then((res) => dispatch({ type: actionTypes.SUBMIT_ORDER_SUCCESS }))
    .catch((err) => dispatch({ type: actionTypes.SUBMIT_ORDER_FAIL }));
};

export const initPurchase = () => ({
  type: actionTypes.INIT_PURCHASE
});

export const fetchOrders = () => (dispatch) => {
  axios
    .get("/orders.json")
    .then((res) => res.data)
    .then((orders) => {
      const transformedOrders = Object.keys(orders).map((key) => ({ ...orders[key], id: key }));
      dispatch({ type: actionTypes.FETCH_ORDERS_SUCCESS, orders: transformedOrders });
    })
    .catch((err) => console.log(err));
};
