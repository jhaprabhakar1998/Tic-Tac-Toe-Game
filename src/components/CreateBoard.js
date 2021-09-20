import { useEffect, useState } from "react";
import "../styles.css";

const cellClickHandler = (cellIdentifier) => {
  console.log("Hello cell ", cellIdentifier, " was clicked");
};

export default function CreateBoard({ boardDimension }) {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoardRow = Array();
    for (let i = 0; i < boardDimension; i++) newBoardRow.push(i);
    const newBoard = Array();
    for (let i = 0; i < boardDimension; i++) newBoard.push(newBoardRow);
    setBoard(newBoard);
  }, [boardDimension]);

  return (
    <div className="tic-tac-toe-board">
      <div className="board">
        {board.map((boardRow, boardRowIndex) => {
          return (
            <div className="board-row" key={boardRowIndex}>
              {boardRow.map((currentRow, index) => {
                const cellIdentifier =
                  boardRowIndex * boardDimension + (index + 1); //cell indexing starts from 1.
                return (
                  <div
                    className="board-cell"
                    key={cellIdentifier}
                    onClick={() => cellClickHandler(cellIdentifier)}
                  >
                    Hello
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
