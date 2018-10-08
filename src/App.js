import React, { Component } from "react";
import LowerBoxModal from "./components/LowerBoxModal/LowerBoxModal";
import "./App.css";
import axios from "axios";
import IsLoading from "./components/IsLoading/IsLoading";
import TopNav from "./components/TopNav/TopNav";
import SideBar from "./components/SideBar/SideBar";
// import IsLoadingPoke from "./components/IsLoading/IsLoadingPoke";
import PokeShop from "./components/PokeShop/PokeShop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      isLoading: true,
      isOpen: false,
      sideBar: "sideHidden",
      filteredInput: "",
      modal: "hidden",
      pokePage: false,
      pokeClassActive: "",
      homeClassActive: "active",
      specialClass: "hiddenSpecial",
      specialText: "hiddenSpeical"
    };
    this.openClose = this.openClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.togglePage = this.togglePage.bind(this);
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
  togglePage() {
    console.log("togglePage activated");
    if (this.state.pokePage === false) {
      this.setState({
        pokePage: true,
        pokeClassActive: "active",
        homeClassActive: ""
      });
    } else {
      this.setState({
        pokePage: false,
        pokeClassActive: "",
        homeClassActive: "active"
      });
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3005/api/characterlist").then(response => {
      console.log(response.data);
      this.setState({ character: response.data, isLoading: false });
    });
  }
  toggleClassName = () => {
    this.state.specialClass === "hiddenSpecial"
      ? this.setState({
          specialClass: "outerSpecialBox",
          specialText: "spokenText"
        })
      : this.setState({
          specialClass: "hiddenSpecial",
          specialText: "hiddenSpecial"
        });
  };
  render() {
    console.log(this.state.character);
    let currentPage;
    if (this.state.pokePage) {
      currentPage = <PokeShop filteredInput={this.state.filteredInput} />;
    } else {
      currentPage = (
        <IsLoading
          list={this.state.character}
          loading={this.state.isLoading}
          filteredInput={this.state.filteredInput}
        />
      );
    }

    return (
      <div className="App">
        <TopNav
          login={this.login}
          openClose={this.openClose}
          filteredInput={this.state.filteredInput}
          handleChange={this.handleChange}
          togglePage={this.togglePage}
          pokeClassActive={this.state.pokeClassActive}
          homeClassActive={this.state.homeClassActive}
        />
        <SideBar
          sideBar={this.state.sideBar}
          toggleClassName={this.toggleClassName}
          specialClass={this.state.specialClass}
          specialText={this.state.specialText}
        />
        {/* //DisplayList is in 'IsLoading' */}
        {/* <IsLoading
          list={this.state.character}
          loading={this.state.isLoading}
          filteredInput={this.state.filteredInput}
        /> */}
        {currentPage}
        <LowerBoxModal modal={this.state.modal} cartClose={this.login} />
      </div>
    );
  }
}

export default App;
