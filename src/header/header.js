import React from "react";
import "./header.css";
import logo from "./images/logo.png";
import masterCardLogo from "./images/mastercard-logo.png";
import kisiiLogo from "./images/kisii-county-logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="Ajiry Logo" />
      </div>
      </div>
  );
}
export const Footer=()=> {
  return ( 
    <div className="footer">
      <div className="footer-container">
        <img src={kisiiLogo} alt="Kisii Logo" />
      </div>
      <div className="footer-container">
        <img src={masterCardLogo} alt="MasterCard Logo" />
      </div>
      </div>
  )};