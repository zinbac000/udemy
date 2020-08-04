import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const modifyIngredients = (ingredientType, increment) => {
  return {
    type: actionTypes.MODIFY_INGREDIENT,
    payload: {
      ingredientType,
      increment
    }
  };
};

const fetchIngredientsSuccess = (ingredients) => ({
  type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
  ingredients
});

const fetchIngredientsFail = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAIL
});

export const fetchIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => dispatch(fetchIngredientsSuccess(res.data)))
      .catch((error) => dispatch(fetchIngredientsFail()));
  };
};
