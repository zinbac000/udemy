import React from "react";

export default function CharComponent(props) {
  return (
    <div
      style={{ display: "inline-block", padding: "5px 10px", margin: "15px 15px 15px 0", boxShadow: "0 2px 3px rgba(0,0,0,0.45)", cursor: "pointer" }}
      onClick={props.clicked}
    >
      {props.letter}
    </div>
  );
}
