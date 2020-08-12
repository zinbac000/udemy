import { all } from "redux-saga/effects";

import { watchAuth } from "./auth";
import { watchBurgerBuilder } from "./burger-builder";
import { watchOrder } from "./order";

export default function* rootSaga() {
  yield all([watchAuth(), watchBurgerBuilder(), watchOrder()]);
}
