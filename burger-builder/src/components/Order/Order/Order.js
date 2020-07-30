import React from "react";

import classes from "./Order.module.css";

export default function Order({ ingredients, price }) {
  const ingredientList = Object.keys(ingredients).map((ingredient, index) => (
    <li key={index}>
      {ingredient}: <strong>{ingredients[ingredient]}</strong>
    </li>
  ));
  return (
    <article className={classes.Order}>
      <div className={classes.OrderContent}>
        <h4 style={{ color: "#66330B", marginBottom: "15px" }}>Ingredients</h4>
        <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>{ingredientList}</ul>
        <br />
        <p>
          Price: <strong>{price.toFixed(2)} USD</strong>
        </p>
        <br />
        <div></div>
      </div>
    </article>
  );
}
