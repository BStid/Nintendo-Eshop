import React, { Component } from "react";
import axios from "axios";
import "./LowerBoxModal.css";

class LowerBoxModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
  }
  retreiveList() {
    console.log("running retreiveList");
    axios.get("http://localhost:3005/api/cartItems").then(response => {
      console.log("retreiveList", response.data);
      this.setState({ cartList: response.data });
    });
  }
  componentDidMount() {
    this.retreiveList();
  }
  render() {
    let displayCartItems = this.state.cartList.map(value => {
      return <img src={value} alt="" className="cartItem" />;
    });
    return (
      <div id="myModal" className={this.props.modal}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.props.cartClose}>
              &times;
            </span>
            <h2>Cart List</h2>
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
