import React from "react";
import DispalyList from "../DisplayList/DisplayList";
import LoadingMario from "./mario_character_white.png";
import "./IsLoading.css";

function IsLoading(props) {
  return props.loading ? (
    <div className="isLoading">
      <img src={LoadingMario} alt="Loading Icon" className="loadingMario" />
      <i>Loading...</i>
    </div>
  ) : (
    <DispalyList list={props.list} filteredInput={props.filteredInput} />
  );
}

export default IsLoading;
