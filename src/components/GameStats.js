import React from 'react'
import './GameStats.css'

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerlevel } = gameStats
  const linesTolevel = linesPerlevel - linesCompleted
  return (
    <ul className="GameStats GamesStats__right ">
      <li>level</li>
      <li className="value">{level}</li>
      <li>Lines to level</li>
      <li className="value">{linesTolevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
    </ul>
  )
}
