import React, { Component } from "react";
import axios from "axios";
import IsLoadingComments from "../IsLoading/IsLoadingComments";
import DisplayComments from "../DisplayList/DisplayComments";
import "./Input.css";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      isLoading: true,
      displayedComments: [],
      isEditing: false,
      editedComment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.pressEdit = this.pressEdit.bind(this);
    this.editMessage = this.editMessage.bind(this);
  }
  handleChange(value, key) {
    console.log({ [key]: value });
    this.setState({ [key]: value });
  }

  pressEnter(eventKey) {
    if (eventKey.keyCode === 13) {
      axios
        .post(`http://localhost:3005/api/comments`, {
          comment: this.state.comments
        })
        .then(response => {
          this.setState({ displayedComments: response.data });
        });
    }
  }
  pressEdit(eventKey, id, comment) {
    if (eventKey.keyCode === 13) {
      this.editMessage(id, comment);
    }
  }
  editMessage(id, comment) {
    console.log("editMessage:", id, comment);
    axios
      .put(`http://localhost:3005/api/editcomments/${id}`, { comment })
      .then(response => {
        console.log(response.data);
        this.setState({ displayedComments: response.data });
      });
  }
  componentDidMount() {
    console.log("Component has been mounted...");
    axios.get("http://localhost:3005/api/allcomments").then(response => {
      console.log("Here we go", response.data);
      this.setState({ displayedComments: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <DisplayComments
          editedComment={this.state.editedComment}
          comments={this.state.displayedComments}
          editMessage={this.editMessage}
          pressEdit={this.pressEdit}
          handleChange={this.handleChange}
        />
        <input
          placeholder="Leave a Comment..."
          type="text"
          className="inputBar"
          onChange={e => this.handleChange(e.target.value, "comments")}
          onKeyDown={e => this.pressEnter(e)}
        />
      </div>
    );
    // return <div className="input" />;
  }
}

export default InputBox;
