import React from "react";
import "./DisplayList.css";

function DisplayList(props) {
  let displayList = props.list.map((value, index) => {
    return <img src={value.image} alt="" key={index} className="character" />;
  });
  return <div>{displayList}</div>;
}

export default DisplayList;
