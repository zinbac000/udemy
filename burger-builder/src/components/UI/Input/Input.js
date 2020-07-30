import React from "react";

import classes from "./Input.module.css";

export default function Input(props) {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.shouldValidate && props.touched && props.invalid) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = <input className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    case "textarea":
      inputElement = <textarea className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    case "select":
      inputElement = (
        <select value={props.value} className={inputClasses.join(" ")} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />;
  }
  return (
    <div className={classes.Input}>
      {props.label ? <label>{props.label}</label> : null}
      {inputElement}
    </div>
  );
}
