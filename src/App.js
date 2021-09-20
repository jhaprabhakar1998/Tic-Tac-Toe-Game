import { useState } from "react";
import CreateBoard from "./components/CreateBoard";
import "./styles.css";

export default function App() {
  const [boardDimension, setBoardDimension] = useState(3);
  return (
    <div className="App">
      <h1>Welcome to Tic Tac Toe Game</h1>
      <input
        value={boardDimension}
        onChange={(e) => setBoardDimension(e.target.value)}
        type="number"
        className="col form-control mx-2"
      />
      <CreateBoard
        boardDimension={boardDimension}
        currentPlayer={null}
        player1Move={null}
        player2Move={null}
        player1Sign={null}
      />
    </div>
  );
}
