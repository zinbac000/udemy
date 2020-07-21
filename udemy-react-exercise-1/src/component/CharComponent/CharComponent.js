import React, { useRef, useEffect } from "react";

function CharComponent(props) {
  console.log("[CharComponent] rendering...");
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.style.backgroundColor = "yellow";
  }, []);
  return (
    <div
      ref={divRef}
      style={{ display: "inline-block", padding: "5px 10px", margin: "15px 15px 15px 0", boxShadow: "0 2px 3px rgba(0,0,0,0.45)", cursor: "pointer" }}
      onClick={() => props.clicked(props.id)}
    >
      {props.letter}
    </div>
  );
}

export default React.memo(CharComponent);
