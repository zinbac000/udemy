import React from "react";

export default function UserInput(props) {
  return (
    <input
      style={{
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "7px 15px",
        marginBottom: "15px",
        width: "100%",
        outline: "none"
      }}
      type="text"
      value={props.value}
      onChange={props.changed}
    />
  );
}
