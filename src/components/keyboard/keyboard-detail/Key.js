import React, { useContext } from "react";

import classes from "./Key.module.css";
import WordContext from "../../../store/words-context";

export default function Key({ value }) {
  const { guesses, setGuesses, currentGuess, setCurrGuess } =
    useContext(WordContext);

  const keyClickHandler = () => {
    const newBoard = [...guesses];
    newBoard[currentGuess.attempt][currentGuess.letterPos] = value;
    setGuesses(newBoard);
    setCurrGuess(currentGuess.attempt, currentGuess.letterPos + 1);
  };

  return (
    <div className={classes.key} onClick={keyClickHandler}>
      {value}
    </div>
  );
}
