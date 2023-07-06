import { Chess } from "chess.js";
import { useState } from "react";
import Chessground from "react-chessground";
import "./chess.css";
import "./styles.css";
import "./theme.css";
import toDests from "./to-dests";

export default function App() {
  const [fen, setFen] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  );

  const chess = new Chess(fen);
  const turnColor = chess.turn() === "w" ? "white" : "black";
  const handleMove = (from, to) => {
    chess.move({ from, to });
    setFen(chess.fen());
  };

  return (
    <div className="App">
      <Chessground
        fen={fen}
        turnColor={turnColor}
        onMove={handleMove}
        movable={toDests(chess)}
      />
    </div>
  );
}
