import React from "react";
import PropTypes from "prop-types";

import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {
  let ingredientArray = Object.keys(props.ingredients)
    .map((key) => {
      return [...Array(props.ingredients[key])].map((_, index) => <BurgerIngredient key={`${key}_${index}`} type={key} />);
    })
    .reduce((arr, el) => [...arr, ...el], []);

  if (ingredientArray.length === 0) {
    ingredientArray = <div style={{ marginBottom: "5px" }}>Choose an ingredients</div>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};
