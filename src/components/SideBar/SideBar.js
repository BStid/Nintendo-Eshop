import React from "react";
import InputBox from "../InputBox/InputBox";
import "./SideBar.css";

export default function SideBar(props) {
  return (
    <div>
      <aside className={props.sideBar}>
        <InputBox />
      </aside>
    </div>
  );
}
