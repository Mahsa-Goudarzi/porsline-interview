import React from "react";
import Key from "./keyboard-detail/Key";

import classes from "./Keyboard.module.css";

export default function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div>
      <div className={classes.row}>
        {keys1.map((k) => {
          return <Key value={k} key={k} />;
        })}
      </div>
      <div className={classes.row}>
        {keys2.map((k) => {
          return <Key value={k} key={k} />;
        })}
      </div>
      <div className={classes.row}>
        <Key value={"Enter"} />
        {keys3.map((k) => {
          return <Key value={k} key={k} />;
        })}
        <Key value={"Clear"} />
      </div>
    </div>
  );
}
