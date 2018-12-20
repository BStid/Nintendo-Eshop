import React, { Component } from "react";
import axios from "axios";
import "./PokeShop.css";

class AddToCartPokeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addPokeToCart = this.addPokeToCart.bind(this);
  }

  addPokeToCart() {
    console.log("addToPokeCart", this.props.selectedItem);
    axios.post(`/api/cartItems?cartItems=${this.props.selectedItem}`);
  }
  render() {
    return (
      <div>
        <button className="addButton" onClick={this.addPokeToCart}>
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    );
  }
}

export default AddToCartPokeButton;
