import burgerBuilderReducer from "./burgerBuilderReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

export default combineReducers({
  burgerBuilderReducer,
  orderReducer,
  authReducer
});
