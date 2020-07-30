import React from "react";
import classes from "./Person.module.css";

export default function Person({ name, age }) {
  return (
    <div className={classes.Person}>
      <h3>
        Name: <strong>{name}</strong>
      </h3>
      <p>Age: {age}</p>
    </div>
  );
}
