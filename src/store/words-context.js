import React, { useState } from "react";

const initialCorrectWord = "RAINY";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const initialGuess = { attempt: 0, letterPos: 0 };

const initialGameOver = {
  gameOver: false,
  guessedWord: false,
};

export const WordContext = React.createContext({
  correctWord: "",
  guesses: null,
  currentGuess: null,
  gameOver: null,
  onClear: () => {},
  onEnter: () => {},
  onClickLetter: (value) => {},
});

export const WordsContextProvider = (props) => {
  const corrWord = initialCorrectWord;
  const [board, setBoard] = useState(initialBoard);
  const [currGuess, setCurrGuess] = useState(initialGuess);
  const [gameOver, setGameOver] = useState(initialGameOver);

  const handleClear = () => {
    if (currGuess.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currGuess.attempt][currGuess.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos - 1 });
  };

  const handleEnter = () => {
    if (currGuess.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currGuess.attempt][i];
    }

    setCurrGuess({ attempt: currGuess.attempt + 1, letterPos: 0 });

    if (currWord === corrWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currGuess.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const handleClickLetter = (value) => {
    if (currGuess.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currGuess.attempt][currGuess.letterPos] = value;
    setBoard(newBoard);
    setCurrGuess({ ...currGuess, letterPos: currGuess.letterPos + 1 });
  };

  const contextValue = {
    correctWord: corrWord,
    guesses: board,
    currentGuess: currGuess,
    gameOver: gameOver,
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
