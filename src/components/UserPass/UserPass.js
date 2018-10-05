import React, { Component } from "react";

class UserPass extends Component(props) {
  render() {
    return (
      <div>
        <input
          className="userPass"
          type="password"
          placeholder="Username"
          onChange={e => props.handleChange(e.target.value, "username")}
        />
        <input
          className="userPass"
          type="password"
          placeholder="Password"
          onChange={e => props.handleChange(e.target.value, "password")}
        />
      </div>
    );
  }
}

export default UserPass;
