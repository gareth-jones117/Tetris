import './GameController.css'

import { Action, actionForKey } from '/src/utilities/Input'
import { playerController } from '/src/utilities/usePlayerlayerController'

import { useInterval } from '/src/hooks/useInterval'
import { useDropTime } from '/src/hooks/useDropTime'

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  })

  useInterval(() => {
    handleInput((action: Action.SlowDrop))
  }, dropTime)

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code)
    if (action === Action.Quit) {
      setGameOver(true)
    }
  }

  const onKeyDown = ({ code }) => {
    handleInput({ action })
  }

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    })
  }

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  )
}

export default GameController
