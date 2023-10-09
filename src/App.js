import { useContext } from "react";

import GameBoard from "./components/game-board/GameBoard";
import Keyboard from "./components/keyboard/Keyboard";

import "./App.css";
import WordContext from "./store/words-context";

function App() {
  const wordCtx = useContext(WordContext);

  return (
    <div className="App">
      <h2>Wordle</h2>
      <GameBoard guesses={wordCtx.guesses} />
      <Keyboard />
    </div>
  );
}

export default App;
