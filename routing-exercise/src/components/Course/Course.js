import React from "react";

export default function Course(props) {
  const query = new URLSearchParams(props.location.search);
  const [, titleValue] = query.entries().next().value;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Course title: <strong>{titleValue}</strong>
      </h1>
      <p>
        Course ID: <strong>{props.match.params.id}</strong>
      </p>
    </div>
  );
}
