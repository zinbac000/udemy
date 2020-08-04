import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: null,
  purchased: false,
  submitting: false,
  fetching: false,
  error: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER_START:
      return { ...state, submitting: true };
    case actionTypes.SUBMIT_ORDER_SUCCESS:
      return { ...state, purchased: true, submitting: false };
    case actionTypes.INIT_PURCHASE:
      return { ...state, purchased: false, submitting: false };
    case actionTypes.FETCH_ORDERS_START:
      return { ...state, fetching: true };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.orders, error: false, fetching: false };
    case actionTypes.FETCH_ORDERS_FAIL:
      return { ...state, fetching: false, error: true };
    default:
      return state;
  }
};

export default orderReducer;
