import { useTetris } from './utils/useTetris';
import Board from './components/Board'
import UpcomingBlocks from './components/UpcomingBlocks';
import style from './Game.module.scss';

const Game = () => {
  const { board,  isPlaying, score, upcomingBlocks, startGame } = useTetris();

  return (
    <div className="app">
        {isPlaying ? (
            <div className={style.gameContainer}>
                <Board currentBoard={board} score={score} />
                <div className={style.upcomingContainer}>
                    <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
                    <h3>Use the arrow keys to move the block</h3>
                </div>
            </div>) : (
            <div className={style.gameIntro}>
                <h1>Tetris</h1>
                <button onClick={startGame}>New Game</button>
            </div>
        )}
    </div>
  )
}

export default Game