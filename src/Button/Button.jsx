import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-container">
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;

/* CSS */
