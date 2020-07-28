import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact={props.exact} to={props.link} activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
}
