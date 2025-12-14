import './Tetris.css'
import Board from '/src/components/Board'
import { useBoard } from '/src/hooks/useBoard'
import GameStats from '/src/components/GameStats'

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns })
  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  )
}

export default Tetris
