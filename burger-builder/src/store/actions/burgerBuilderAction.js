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

export const fetchIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => dispatch({ type: actionTypes.FETCH_INGREDIENTS_SUCCESS, ingredients: res.data }))
      .catch((error) => dispatch({ type: actionTypes.FETCH_INGREDIENTS_FAIL }));
  };
};
