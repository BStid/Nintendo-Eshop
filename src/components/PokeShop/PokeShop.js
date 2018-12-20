import React, { Component } from "react";
import axios from "axios";
import IsLoadingPoke from "../IsLoading/IsLoadingPoke";
import AddToCartPokeButton from "./AddToCartPokeButton";
import "./PokeShop.css";

class PokeShop extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      character: []
    };
  }

  componentDidMount() {
    axios.get("/api/pokelist").then(response => {
      console.log(response.data);
      this.setState({ character: response.data, isLoading: false });
    });
  }
  render() {
    let displayList;
    if (this.state.isLoading) {
      displayList = <IsLoadingPoke />;
    } else {
      displayList = this.state.character
        .filter(value => {
          return value.name.toLowerCase().includes(this.props.filteredInput);
        })
        .map((value, index) => {
          return (
            <div className="character">
              <img
                src={value.imageUrl}
                alt=""
                key={index}
                className="charImg"
              />
              <AddToCartPokeButton selectedItem={value.imageUrl} />
            </div>
          );
        });
    }
    return <div className="outerEshopBox">{displayList}</div>;
  }
}
export default PokeShop;
