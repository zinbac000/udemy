import * as actionTypes from "../actions/burgerBuilderAction";

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4
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
    default:
      return state;
  }
};

export default burgerBuilderReducer;
