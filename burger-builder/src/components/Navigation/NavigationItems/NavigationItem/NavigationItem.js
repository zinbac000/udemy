import React from "react";
import PropTypes from "prop-types";

import classes from "./NavigationItem.module.scss";

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.Active : null}>
        {props.children}
      </a>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};
