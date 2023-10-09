import React from "react";
import Letter from "./Letter";

import classes from "./BoardWord.module.css";

export default function BoardWord({ word }) {
  return (
    <div className={classes["board-word"]}>
      {word.map((l, i) => {
        return <Letter key={i} letter={l} />;
      })}
      ;
    </div>
  );
}
