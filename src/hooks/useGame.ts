import { useState, useEffect } from "react";

//tic tac toe game
const useGame = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<string>(Math.random() < 0.5 ? "X" : "O");
  const [gameStatus, setGameStatus] = useState<string>("");

  useEffect(() => {
    const draw = board.every((item) => item !== undefined && item !== null);

    const checkStatus = () => {
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
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
    };

    const winner = checkStatus();
    if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else if (draw) {
      setGameStatus(`Draw`);
    } else {
      setGameStatus(`Next player: ${player}`);
    }
  }, [board, player]);

  const turn = (index: number) => {
    setBoard((prev) => {
      prev[index] = player;
      return prev;
    });

    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer(Math.random() < 0.5 ? "X" : "O");
    setGameStatus("");
  };
  return { board, player, gameStatus, turn, newGame };
};

export default useGame;
