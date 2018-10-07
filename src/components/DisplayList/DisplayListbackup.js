import React from "react";
import "./DisplayList.css";

function DisplayList(props) {
  let displayList = props.list.map((value, index) => {
    return (
      <div className="character">
        <p>{value.name}</p>
        {/* <img src={value.image} alt="" key={index} className="charImg" /> */}
        <button className="addButton">Add to Cart </button>
      </div>
    );
  });
  return <div>{displayList}</div>;
}

export default DisplayList;
