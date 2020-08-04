import * as actionTypes from "../actions/actionTypes";

const initialState = {
  idToken: null,
  userId: null,
  loading: false,
  error: null,
  authRedirectPath: "/",
  checkingState: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, idToken: action.idToken, userId: action.userId, loading: false, error: null };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.error.message, loading: false };
    case actionTypes.AUTH_LOGOUT:
      return { ...state, idToken: null, userId: null };
    case actionTypes.AUTH_SET_REDIRECT_PATH:
      return { ...state, authRedirectPath: action.path };
    case actionTypes.AUTH_CHECKSTATE_DONE:
      return { ...state, checkingState: false };
    default:
      return state;
  }
};

export default authReducer;
