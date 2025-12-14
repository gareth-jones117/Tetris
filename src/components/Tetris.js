import './Tetris.css'
import Board from '/src/components/Board'
import { useBoard } from '/src/hooks/useBoard'
import GameStats from '/src/components/GameStats'
import { useGameStats } from '/src/hooks/useGameStats'
import Previews from '/src/components/Previews'

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns })
  const [gameStats, addLinesCleared] = useGameStats()

  const player = { tetrominoes: [] } //delete after testing

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  )
}

export default Tetris
