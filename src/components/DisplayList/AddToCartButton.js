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
  addToCart() {
    axios
      .post(`http://localhost:3005/api/cartItems`, {
        cartItems: this.props.selectedItem
      })
      .then(response => {
        this.setState({ cartItems: response.data });
      });
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
