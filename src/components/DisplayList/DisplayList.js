import React from "react";
import "./DisplayList.css";
import LogoImage from "./LogoImage/LogoImage";

function DisplayList(props) {
  let displayList = props.list
    .filter(value => {
      return value.name.toLowerCase().includes(props.filteredInput);
    })
    .map((value, index) => {
      return (
        <div className="character">
          {/* <p className="characterName">{value.gameSeries}</p> */}
          <LogoImage value={value.gameSeries} />
          <img src={value.image} alt="" key={index} className="charImg" />
          <button className="addButton"> Add to Cart </button>
        </div>
      );
    });
  return <div>{displayList}</div>;
}

export default DisplayList;
