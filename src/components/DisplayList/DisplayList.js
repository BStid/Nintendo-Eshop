import React, { Component } from "react";
import "./DisplayList.css";
import LogoImage from "./LogoImage/LogoImage";
import AddToCartButton from "./AddToCartButton";

class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: "hidden"
    };
    // this.login = this.login.bind(this);
  }
  login() {
    if (this.state.modal === "hidden") {
      this.setState({ modal: "modal" });
    } else {
      this.setState({ modal: "hidden" });
    }
  }
  render() {
    let displayList = this.props.list
      .filter(value => {
        return value.name.toLowerCase().includes(this.props.filteredInput);
      })
      .map((value, index) => {
        return (
          <div className="character">
            <LogoImage value={value.gameSeries} />
            <img src={value.image} alt="" key={index} className="charImg" />
            <AddToCartButton
              selectedItem={value}
              cartItems={this.state.cartItems}
            />
          </div>
        );
      });
    return <div>{displayList}</div>;
  }
}

export default DisplayList;
