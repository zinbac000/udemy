import React from "react";
import PropTypes from "prop-types";

import classes from "./DrawerToggler.module.scss";

export default function DrawerToggler(props) {
  return (
    <div className={classes.DrawerToggler} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

DrawerToggler.propTypes = {
  clicked: PropTypes.func.isRequired
};
