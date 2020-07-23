import React from "react";
import classes from "./Backdrop.module.scss";

export default function Backdrop(props) {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      {props.children}
    </div>
  ) : null;
}
