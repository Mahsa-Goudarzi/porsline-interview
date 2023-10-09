import React, { useState } from "react";
import { boardDefault } from "../../store/words-utils";
import BoardWord from "./board-word/BoardWord";

export default function GameBoard() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div>
      {board.map((word, i) => {
        return <BoardWord key={i} word={word} />;
      })}
    </div>
  );
}
