import GameBoard from "./components/game-board/GameBoard";
import Keyboard from "./components/keyboard/Keyboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Wordle</h2>
      <GameBoard />
      <Keyboard />
    </div>
  );
}

export default App;
