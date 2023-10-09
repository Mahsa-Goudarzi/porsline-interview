import React, { useContext } from "react";

import WordContext from "../../../store/words-context";

import classes from "./Key.module.css";

export default function Key({ value }) {
  const { guesses, setGuesses, currentGuess, setCurrGuess } =
    useContext(WordContext);

  const keyClickHandler = () => {
    if (value === "Enter") {
      if (currentGuess.letterPos !== 5) return;
      setCurrGuess({ attempt: currentGuess.attempt + 1, letterPos: 0 });
    } else if (value === "Clear") {
      if (currentGuess.letterPos === 0) return;
      const newBoard = [...guesses];
      newBoard[currentGuess.attempt][currentGuess.letterPos - 1] = "";
      setGuesses(newBoard);
      setCurrGuess({ ...currentGuess, letterPos: currentGuess.letterPos - 1 });
    } else {
      if (currentGuess.letterPos > 4) return;
      const newBoard = [...guesses];
      newBoard[currentGuess.attempt][currentGuess.letterPos] = value;
      setGuesses(newBoard);
      setCurrGuess({ ...currentGuess, letterPos: currentGuess.letterPos + 1 });
    }
  };

  return (
    <div className={classes.key} onClick={keyClickHandler}>
      {value}
    </div>
  );
}
