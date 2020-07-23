import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem active link="#">
        Burger Builder
      </NavigationItem>
      <NavigationItem link="#">Order</NavigationItem>
    </ul>
  );
}
