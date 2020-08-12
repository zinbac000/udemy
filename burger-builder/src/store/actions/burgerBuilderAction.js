import * as actionTypes from "./actionTypes";

export const modifyIngredients = (ingredientType, increment) => {
  return {
    type: actionTypes.MODIFY_INGREDIENT,
    payload: {
      ingredientType,
      increment
    }
  };
};

export const fetchIngredientsSuccess = (ingredients) => ({
  type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
  ingredients
});

export const fetchIngredientsFail = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAIL
});

export const fetchIngredients = () => ({
  type: actionTypes.FETCH_INGREDIENTS
});
