import React, { Component } from "react";
import "./DisplayList.css";
import CancelIcon from "./270-cancel-circle.png";
import EditBox from "../InputBox/EditBox";

class DisplayComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editActive: false,
      editBoxClassName: "editBoxHidden"
    };
    this.displayEditBox = this.displayEditBox.bind(this);
    this.closeEditBox = this.closeEditBox.bind(this);
  }

  displayEditBox() {
    if (this.state.editActive === false) {
      console.log("The Button Has Been Pressed!");
      this.setState({ editActive: true, editBoxClassName: "editBox" });
    }
  }
  closeEditBox(eventKey) {
    if (eventKey.keyCode === 13) {
      this.setState({ editActive: false, editBoxClassName: "editBoxHidden" });
    }
  }

  render() {
    let displayComments = this.props.comments.map((value, index) => {
      return (
        <h5 className="comments" key={index} onClick={this.displayEditBox}>
          <EditBox
            comment={this.props.editedComment}
            id={index}
            pressEdit={this.props.pressEdit}
            handleChange={this.props.handleChange}
            className={this.state.editBoxClassName}
            closeEditBox={this.closeEditBox}
          />
          <div className="deleteButton">
            <img
              src={CancelIcon}
              className="deleteIcon"
              onClick={() => this.props.removeComment(index)}
              alt="Delete Button"
            />
          </div>
          {console.log(value, index)}
          {value}
        </h5>
      );
    });
    return <div className="commentSection">{displayComments}</div>;
  }
}

export default DisplayComments;
