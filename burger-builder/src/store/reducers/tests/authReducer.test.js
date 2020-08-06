import authReducer from "../authReducer";
import * as actionTypes from "../../actions/actionTypes";

describe("auth reducer", () => {
  const intialState = {
    idToken: null,
    userId: null,
    loading: false,
    error: null,
    authRedirectPath: "/",
    checkingState: true
  };
  it("should return initial state in first time creating store", () => {
    expect(authReducer(undefined, {})).toEqual(intialState);
  });

  it("should change loading state to true when pass action type AUTH_START", () => {
    expect(
      authReducer(intialState, {
        type: actionTypes.AUTH_START
      })
    ).toEqual({ ...intialState, loading: true });
  });

  it("should store token on authentication success, stop loading and reset error", () => {
    expect(
      authReducer(intialState, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: "testtoken",
        userId: "testuserId"
      })
    ).toEqual({ ...intialState, idToken: "testtoken", userId: "testuserId", loading: false, error: null });
  });
});
