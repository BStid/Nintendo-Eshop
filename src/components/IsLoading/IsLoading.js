import React from "react";
import DispalyList from "../DisplayList/DisplayList";
import "./IsLoading.css";

function IsLoading(props) {
  return props.loading ? (
    <div className="isLoading">
      <i>Loading...</i>
    </div>
  ) : (
    <DispalyList list={props.list} />
  );
}

export default IsLoading;
