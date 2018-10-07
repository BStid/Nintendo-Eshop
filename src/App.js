import React, { Component } from "react";
import LowerBoxModal from "./components/LowerBoxModal/LowerBoxModal";
import "./App.css";
import axios from "axios";
import IsLoading from "./components/IsLoading/IsLoading";
import TopNav from "./components/TopNav/TopNav";
import SideBar from "./components/SideBar/SideBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      isLoading: true,
      isOpen: false,
      sideBar: "sideHidden",
      filteredInput: "",
      modal: "hidden"
    };
    this.openClose = this.openClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  openClose() {
    console.log("Button Clicked");
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false, sideBar: "sideHidden" });
    } else {
      this.setState({ isOpen: true, sideBar: "sideBar" });
    }
  }

  handleChange(value, key) {
    console.log({ [key]: value });
    this.setState({ [key]: value });
  }
  login() {
    if (this.state.modal === "hidden") {
      this.setState({ modal: "modal" });
    } else {
      this.setState({ modal: "hidden" });
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3005/api/characterlist").then(response => {
      console.log(response.data);
      this.setState({ character: response.data, isLoading: false });
    });
  }

  render() {
    console.log(this.state.character);
    return (
      <div className="App">
        <TopNav
          login={this.login}
          openClose={this.openClose}
          filteredInput={this.state.filteredInput}
          handleChange={this.handleChange}
        />
        <SideBar sideBar={this.state.sideBar} />
        {/* //DisplayList is in 'IsLoading' */}
        <IsLoading
          list={this.state.character}
          loading={this.state.isLoading}
          filteredInput={this.state.filteredInput}
        />
        <LowerBoxModal modal={this.state.modal} cartClose={this.login} />
      </div>
    );
  }
}

export default App;
