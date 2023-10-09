import React, { useState } from "react";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const WordContext = React.createContext({
  word: "",
  guesses: null,
  setGuesses: (newBoard) => {},
});

export const WordsContextProvider = (props) => {
  const [board, setBoard] = useState(initialBoard);

  const setGuessesHandler = (newBoard) => {
    setBoard(newBoard);
  };

  const contextValue = {
    word: "rainy",
    guesses: board,
    setGuesses: setGuessesHandler,
  };

  return (
    <WordContext.Provider value={contextValue}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContext;
