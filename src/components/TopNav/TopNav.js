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
      <a
        className={props.pokeClassActive}
        href="#PokeShop"
        onClick={props.togglePage}
      >
        PokéShop
      </a>
      <a
        className={props.homeClassActive}
        href="#home"
        onClick={props.togglePage}
      >
        Home
      </a>
      <img
        src="https://s1.thcdn.com/design-assets/products/11244941/pic3.png"
        className="titleImage"
        alt="title"
      />
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
