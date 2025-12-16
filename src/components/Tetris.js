import './Tetris.css'

import Board from '/src/components/Board'
import GameStats from '/src/components/GameStats'
import Previews from '/src/components/Previews'
import GameController from './GameController'

import { useBoard } from '/src/hooks/useBoard'
import { useGameStats } from '/src/hooks/useGameStats'

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  })
  const [gameStats, addLinesCleared] = useGameStats()
  const [player, setPlayer, resetPlayer] = usePlayer()

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  )
}

export default Tetris
