import React from "react";
import BoardWord from "./board-detail/BoardWord";

export default function GameBoard({ guesses }) {
  return guesses.map((word, i) => {
    return <BoardWord key={i} word={word} attemptVal={i} />;
  });
}
