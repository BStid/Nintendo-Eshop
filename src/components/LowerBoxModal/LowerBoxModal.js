import React, { Component } from "react";
import axios from "axios";
import "./LowerBoxModal.css";
import CancelIcon from "./270-cancel-circle.png";
import RefreshIcon from "./303-loop2.png";

class LowerBoxModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
    this.retreiveList = this.retreiveList.bind(this);
  }
  retreiveList() {
    console.log("running retreiveList");
    axios.get("http://localhost:3005/api/cartItems").then(response => {
      console.log("retreiveList", response.data);
      this.setState({ cartList: response.data });
    });
  }
  removeCart(id) {
    console.log("RemoveCart function called");
    axios
      .delete("http://localhost:3005/api/deleteCart/" + id)
      .then(response => {
        this.setState({ cartList: response.data });
      });
  }
  componentDidMount() {
    this.retreiveList();
  }
  render() {
    let displayCartItems = this.state.cartList.map((value, index) => {
      return (
        <div className="cartPlaceHolder">
          <img src={value} alt="" className="cartItem" />
          <img
            src={CancelIcon}
            className="deleteIcon"
            alt="Delete Button"
            onClick={() => this.removeCart(index)}
          />
        </div>
      );
    });
    return (
      <div id="myModal" className={this.props.modal}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.props.cartClose}>
              &times;
            </span>
            <h2>Cart List</h2>
            <img
              src={RefreshIcon}
              alt="Refresh Icon"
              className="refreshIcon"
              onClick={this.retreiveList}
            />
          </div>
          <div className="modal-body" />
          <div className="modal-footer" />

          {displayCartItems}
        </div>
      </div>
    );
  }
}
export default LowerBoxModal;
