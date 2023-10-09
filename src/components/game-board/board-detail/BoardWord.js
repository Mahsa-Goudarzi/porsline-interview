import React from "react";
import Letter from "./Letter";

import classes from "./BoardWord.module.css";

export default function BoardWord({ word, attemptVal }) {
  return (
    <div className={classes["board-word"]}>
      {word.map((l, i) => {
        return (
          <Letter key={i} letter={l} attemptVal={attemptVal} letterPos={i} />
        );
      })}
      ;
    </div>
  );
}
