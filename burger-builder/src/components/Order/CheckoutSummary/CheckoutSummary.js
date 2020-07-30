import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default function CheckoutSummary(props) {
  return (
    <div className={classes.CheckoutSummary}>
      <h2 style={{ marginBottom: "30px" }}>We hope it'll taste well!</h2>
      <Burger ingredients={props.ingredients} />
      <br></br>
      <Button btnType="Danger" clicked={props.onCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onContinue}>
        CONTINUE
      </Button>
    </div>
  );
}
