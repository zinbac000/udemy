import React from "react";

import classes from "./PizzaImage.css";
import image from "../../assets/pizza.jpg";

const PizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={image} className={classes.PizzaImg} alt="pizza" />
  </div>
);

export default PizzaImage;
