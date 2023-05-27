import Cell from './Cell';
import { BoardShape } from '../types';
import style from './Board.module.scss';

interface Props {
      currentBoard: BoardShape;
      score:number
    }

const Board = ({ currentBoard, score }: Props) => {
  return (
    <div className={style.boardContainer}>
      <h2>Score: {score}</h2>
      <div className={style.board}>
      {currentBoard.map((row, rowIndex) => (
        <div className={style.row} key={`${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} type={cell} />
            ))}
        </div>
      ))}
      </div>
    </div>
  )
}

export default Board