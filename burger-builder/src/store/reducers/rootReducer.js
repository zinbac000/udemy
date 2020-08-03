import burgerBuilderReducer from "./burgerBuilderReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from "redux";

export default combineReducers({
  burgerBuilderReducer,
  orderReducer
});
