import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      style={{ cursor: "pointer" }}
    >
      {props.children}
    </button>
  );
}

export default Button;

/* CSS */
