import { takeLatest, put, call } from "redux-saga/effects";
import axios from "../../axios-orders";

import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

function* fetchIngredientsSaga() {
  try {
    const res = yield call([axios, "get"], "/ingredients.json");
    yield put(actions.fetchIngredientsSuccess(res.data));
  } catch (err) {
    yield put(actions.fetchIngredientsFail());
  }
}

export function* watchBurgerBuilder() {
  yield takeLatest(actionTypes.FETCH_INGREDIENTS, fetchIngredientsSaga);
}
