import React from "react";
import InputBox from "../InputBox/InputBox";
import Image from "./mario_character_color.png";
import "./SideBar.css";

export default function SideBar(props) {
  return (
    <div>
      <aside className={props.sideBar}>
        <img src={Image} className="marioIcon" alt="Its-A-Me!" />
        <h3 className="editText">Click a Message to Edit!</h3>
        <InputBox />
        <button className="sendButton"> Send </button>
      </aside>
    </div>
  );
}
