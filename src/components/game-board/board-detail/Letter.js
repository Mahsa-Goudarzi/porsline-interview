import React from "react";

import classes from "./Letter.module.css";

export default function Letter({ letter }) {
  return <div className={classes.letter}>{letter}</div>;
}
