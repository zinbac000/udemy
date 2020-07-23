import React from "react";
import PropTypes from "prop-types";

import classes from "./Logo.module.scss";

export default function Logo(props) {
  return (
    <div className={classes.Logo}>
      <img src={props.logo} alt="logo" />
    </div>
  );
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired
};
