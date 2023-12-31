import React, { useContext } from "react";
import WordContext from "../../store/words-context";

export default function GameOver() {
  const { currentGuess, gameOver, correctWord } = useContext(WordContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentGuess.attempt} attempts</h3>
      )}
    </div>
  );
}
