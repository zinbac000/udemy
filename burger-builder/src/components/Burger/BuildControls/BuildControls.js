import React from "react";
import PropTypes from "prop-types";

import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

export default function BuildControls(props) {
  let { modifyQuantity, ingredients } = props;

  let buildControls = Object.keys(ingredients).map((key) => {
    return <BuildControl key={key} label={key} modifyQuantity={modifyQuantity} lessDisabled={!ingredients[key]} />;
  });

  return (
    <section className={classes.BuildControls}>
      <p>
        Total Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      <div className={classes.BuildControls__Content}>{buildControls}</div>
      <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </section>
  );
}

BuildControls.propTypes = {
  modifyQuantity: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};
