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
      modal: "hidden",
      character: [],
      isLoading: true,
      isOpen: false,
      sideBar: "sideHidden"
    };
    this.login = this.login.bind(this);
    this.openClose = this.openClose.bind(this);
  }

  login() {
    if (this.state.modal === "hidden") {
      this.setState({ modal: "modal" });
    } else {
      this.setState({ modal: "hidden" });
    }
  }
  openClose() {
    console.log("Button Clicked");
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false, sideBar: "sideHidden" });
    } else {
      this.setState({ isOpen: true, sideBar: "sideBar" });
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
        <TopNav login={this.login} openClose={this.openClose} />
        <SideBar sideBar={this.state.sideBar} />
        {/* //DisplayList is in 'IsLoading' */}
        <IsLoading list={this.state.character} loading={this.state.isLoading} />
        <LowerBoxModal modal={this.state.modal} />
      </div>
    );
  }
}

export default App;
