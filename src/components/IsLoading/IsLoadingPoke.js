import React from "react";
import "./IsLoading.css";

function IsLoadingPoke() {
  return (
    <div className="isLoading">
      <img
        src="https://ubisafe.org/images/pokeball-transparent-background-5.png"
        alt="Loading Icon"
        className="loadingPoke"
      />
      <i>Loading...</i>
    </div>
  );
}

export default IsLoadingPoke;
