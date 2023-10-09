import { useContext } from "react";

import WordContext from "../../../store/words-context";

import classes from "./Letter.module.css";

export default function Letter({ letter, attemptVal, letterPos }) {
  const { currentGuess, correctWord } = useContext(WordContext);

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const status =
    currentGuess.attempt > attemptVal &&
    (correct ? "correct" : almost ? "semicorrect" : "wrong");

  return <div className={`${classes.letter} ${classes[status]}`}>{letter}</div>;
}
