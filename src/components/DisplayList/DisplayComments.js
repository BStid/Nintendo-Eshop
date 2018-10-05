import React from "react";
import "./DisplayList.css";
import EditBox from "../InputBox/EditBox";

function DisplayComments(props) {
  let displayComments = props.comments.map((value, index) => {
    // function passEditBox() {
    //   console.log("Passing New Edit Box...!");
    //   return ;
    // }
    return (
      <h5 className="comments" key={index}>
        <EditBox
          comment={props.editedComment}
          id={index}
          pressEdit={props.pressEdit}
          handleChange={props.handleChange}
        />
        {console.log(value, index)}
        {value}
      </h5>
    );
  });
  return <div className="commentSection">{displayComments}</div>;
}

export default DisplayComments;
