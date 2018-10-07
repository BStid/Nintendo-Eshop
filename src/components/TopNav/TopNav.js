import React from "react";
import "./TopNav.css";
import SearchIcon from "./135-search.png";

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
      <input
        type="text"
        className="filterBar"
        placeholder="Search..."
        onChange={e => props.handleChange(e.target.value, "filteredInput")}
      />
      <img src={SearchIcon} className="searchIcon" alt="Search Icon" />
      <div className="sideButton" onClick={props.openClose} />
    </div>
  );
}
