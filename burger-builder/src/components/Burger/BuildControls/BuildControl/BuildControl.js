import React from "react";
import PropTypes from "prop-types";

import classes from "./BuildControl.module.scss";

export default function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div>{props.label}</div>
      <button
        onClick={() => props.modifyQuantity(props.label, -1)}
        className={props.lessDisabled ? classes.BuildControl__Disabled : null}
        disabled={props.lessDisabled}
      >
        Less
      </button>
      <button onClick={() => props.modifyQuantity(props.label, 1)}>More</button>
    </div>
  );
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  lessDisabled: PropTypes.bool.isRequired,
  modifyQuantity: PropTypes.func.isRequired
};
