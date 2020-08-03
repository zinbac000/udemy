import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: null,
  purchased: false,
  submitting: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER_START:
      return { ...state, submitting: true };
    case actionTypes.SUBMIT_ORDER_SUCCESS:
      return { ...state, purchased: true, submitting: false };
    case actionTypes.INIT_PURCHASE:
      return { ...state, purchased: false, submitting: false };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.orders };
    default:
      return state;
  }
};

export default orderReducer;
