import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  console.log("[OrderSummary] rendering...");
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>: {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.orderCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.orderContinued} btnType="Success">
        CONTINUE
      </Button>
    </Fragment>
  );
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  orderCancelled: PropTypes.func.isRequired,
  orderContinued: PropTypes.func.isRequired
};
