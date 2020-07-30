import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact={props.exact} to={props.link} activeClassName={classes.Active}>
        {props.children}
      </NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool
};
