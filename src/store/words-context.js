import React, { useState } from "react";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const initialGuess = { attempt: 0, letterPos: 0 };

export const WordContext = React.createContext({
  word: "",
  guesses: null,
  currentGuess: null,
  setGuesses: (newBoard) => {},
  setCurrGuess: (newGuess) => {},
});

export const WordsContextProvider = (props) => {
  const [board, setBoard] = useState(initialBoard);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  const setGuessesHandler = (newBoard) => {
    setBoard(newBoard);
  };

  const setCurrGuessHandler = (newGuess) => {
    setCurrGuess(newGuess);
  };

  const contextValue = {
    word: "rainy",
    guesses: board,
    currentGuess: currGuess,
    setGuesses: setGuessesHandler,
    setCurrGuess: setCurrGuessHandler,
  };

  return (
    <WordContext.Provider value={contextValue}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContext;
