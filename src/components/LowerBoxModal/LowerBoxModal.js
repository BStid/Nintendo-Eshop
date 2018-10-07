import React from "react";
import "./LowerBoxModal.css";

function LowerBoxModal(props) {
  return (
    <div id="myModal" className={props.modal}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.cartClose}>
            &times;
          </span>
          <h2>Cart List</h2>
        </div>
        <div className="modal-body" />
        <div className="modal-footer">
          <h3> Test - Test - Test</h3>
        </div>
      </div>
    </div>
  );
}
export default LowerBoxModal;
