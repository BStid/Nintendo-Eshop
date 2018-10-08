import React from "react";
import InputBox from "../InputBox/InputBox";
import Image from "./mario_character_color.png";
import Special from "../Special/Special";
import "./SideBar.css";

export default function SideBar(props) {
  return (
    <div>
      <aside className={props.sideBar}>
        <div className="hide" onClick={props.toggleClassName} />
        <img src={Image} className="marioIcon" alt="Its-A-Me!" />
        <h3 className="editText">Click a Message to Edit!</h3>
        <InputBox />
      </aside>
      <Special
        specialClass={props.specialClass}
        specialText={props.specialText}
      />
    </div>
  );
}
