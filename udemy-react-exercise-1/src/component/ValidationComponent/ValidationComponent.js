import React from "react";

export default function ValidationComponent(props) {
  let validation;
  if (props.textLength < 5) {
    validation = <p style={{ color: "red" }}>Text too short</p>;
  } else {
    validation = <p style={{ color: "green" }}>Text long enough</p>;
  }
  return validation;
}
