import React from "react";
import "./TopNav.css";

export default function TopNav(props) {
  return (
    <div className="topBar">
      <a href="#cart" onClick={props.login}>
        My Cart
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a className="active" href="#home">
        Home
      </a>
      <div className="sideButton" onClick={props.openClose} />
    </div>
  );
}
