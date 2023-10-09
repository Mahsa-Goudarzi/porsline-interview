import React, { useContext } from "react";

import WordContext from "../../../store/words-context";

import classes from "./Key.module.css";

export default function Key({ value }) {
  const { onClear, onEnter, onClickLetter } = useContext(WordContext);

  const keyClickHandler = () => {
    if (value === "Enter") {
      onEnter();
    } else if (value === "Clear") {
      onClear();
    } else {
      onClickLetter(value);
    }
  };

  return (
    <div className={classes.key} onClick={keyClickHandler}>
      {value}
    </div>
  );
}
