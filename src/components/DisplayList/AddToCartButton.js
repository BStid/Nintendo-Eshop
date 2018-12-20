import React, { Component } from "react";
import axios from "axios";
import "./DisplayList.css";

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  // addToCart() {
  //   axios.post(`/api/cartItems`, {
  //     cartItems: this.props.selectedItem
  //   });
  // }

  addToCart() {
    console.log("addToCart", this.props.selectedItem);
    axios.post(`/api/cartItems?cartItems=${this.props.selectedItem.image}`);
  }
  render() {
    return (
      <div>
        <button className="addButton" onClick={this.addToCart}>
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
