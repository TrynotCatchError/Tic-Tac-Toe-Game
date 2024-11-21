import { useState } from "react";
import Board from "./components/Board";
import "./styles.css";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  return (
    <div className="app-container">
      {!gameStarted ? (
        <div className="start-screen">
          <h1>Tic-Tac-Toe</h1>
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <Board resetGame={resetGame} />
      )}
    </div>
  );
}
