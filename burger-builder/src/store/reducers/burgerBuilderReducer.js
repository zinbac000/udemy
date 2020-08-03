import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  meat: 1.3,
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODIFY_INGREDIENT:
      const { ingredientType, increment } = action.payload;
      const newIngredients = { ...state.ingredients };
      newIngredients[ingredientType] += increment;
      if (newIngredients[ingredientType] < 0) {
        return state;
      }

      const newPrice = state.totalPrice + INGREDIENT_PRICES[ingredientType] * increment;

      return { ...state, ingredients: newIngredients, totalPrice: newPrice };

    case actionTypes.FETCH_INGREDIENTS_SUCCESS:
      return { ...state, ingredients: action.ingredients, error: false, totalPrice: 4 };

    case actionTypes.FETCH_INGREDIENTS_FAIL:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default burgerBuilderReducer;
