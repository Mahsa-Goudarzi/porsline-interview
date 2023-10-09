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
  onClear: () => {},
  onEnter: () => {},
  onClickLetter: (value) => {},
});

export const WordsContextProvider = (props) => {
  const [board, setBoard] = useState(initialBoard);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  const handleClear = () => {
    if (currGuess.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currGuess.attempt][currGuess.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos - 1 });
  };

  const handleEnter = () => {
    if (currGuess.letterPos !== 5) return;
    setCurrGuess({ attempt: currGuess.attempt + 1, letterPos: 0 });
  };

  const handleClickLetter = (value) => {
    if (currGuess.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currGuess.attempt][currGuess.letterPos] = value;
    setBoard(newBoard);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos + 1 });
  };

  const contextValue = {
    word: "rainy",
    guesses: board,
    currentGuess: currGuess,
    setGuesses: setBoard,
    setCurrGuess: setCurrGuess,
    onClear: handleClear,
    onEnter: handleEnter,
    onClickLetter: handleClickLetter,
  };

  return (
    <WordContext.Provider value={contextValue}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContext;
