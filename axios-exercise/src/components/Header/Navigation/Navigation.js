import React from "react";

import classes from "./Navigation.module.css";

export default function Navigation(props) {
  return <ul className={classes.Navigation}>{props.children}</ul>;
}
