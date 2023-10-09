import React from "react";

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
});

export const WordsContextProvider = (props) => {
  const contextValue = {
    word: "rainy",
    guesses: initialBoard,
  };

  return (
    <WordContext.Provider value={contextValue}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContext;
