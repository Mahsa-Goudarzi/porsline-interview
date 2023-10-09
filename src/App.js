import { useContext } from "react";

import GameBoard from "./components/game-board/GameBoard";
import Keyboard from "./components/keyboard/Keyboard";

import "./App.css";
import WordContext from "./store/words-context";
import GameOver from "./components/game-over/GameOver";

function App() {
  const wordCtx = useContext(WordContext);

  return (
    <div className="App">
      <h2>Wordle</h2>
      <GameBoard guesses={wordCtx.guesses} />
      {wordCtx.gameOver.gameOver ? <GameOver /> : <Keyboard />}
    </div>
  );
}

export default App;
