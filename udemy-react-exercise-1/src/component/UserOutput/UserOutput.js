import React from "react";
import "./UserOutput.css";

export default function UserOutput(props) {
  return (
    <div className="user-output">
      <p>Hello {props.username}!</p>
      <p>Welcome to the react world</p>
    </div>
  );
}
