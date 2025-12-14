import Menu from '/src/components/Menu'
import { useGameOver } from '/src/hooks/useGameOver'
import Tetris from '/src/components/Tetris'

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver()

  const start = () => resetGameOver()

  return (
    <div className="Game">
      {gameOver ? <Menu onClick={start} /> :
      <Tetris rows{rows} columns{columns} />
      
      <p>tetris</p>>
    </div>
  
  )
}
export default Game
