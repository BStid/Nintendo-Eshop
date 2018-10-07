import React from "react";

export default function EditBox(props) {
  return (
    <input
      placeholder="Edit Message..."
      type="text"
      className={props.className}
      onKeyDown={event => props.pressEdit(event, props.id, props.comment)}
      onChange={event =>
        props.handleChange(event.target.value, "editedComment")
      }
      onKeyUp={props.closeEditBox}
    />
  );
}
