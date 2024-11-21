import { useState } from "react";
import Square from "./Square";

export default function Board({ resetGame }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.every((square) => square !== null) ? "Tie" : null;
  };

  const makeMove = (index) => {
    if (winner || board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    setWinner(newWinner);

    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="board-container">
      <h2>
        {winner
          ? winner === "Tie"
            ? "It's a Tie!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>
      <div className="board">
        {board.map((value, idx) => (
          <Square key={idx} value={value} onClick={() => makeMove(idx)} />
        ))}
      </div>
      <div className="controls">
        <button onClick={restartGame}>Restart</button>
        <button onClick={resetGame}>Back to Start Screen</button>
      </div>
    </div>
  );
}
