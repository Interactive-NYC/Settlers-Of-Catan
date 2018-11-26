import React from 'react'

const PlayerControls = ({
  playerTurn,
  player,
  nextPlayerThunk,
  toggleModal,
  newDiceRoll,
  changePhase,
  distributeResources,
  changeGamePhase
}) => {
  return (
    <div
      className={`game-controller player-${player.playerNumber} ${playerTurn ===
        player.playerNumber && `active-${player.playerNumber}`}`}
    >
      <div className="section-resources">
        {player.resources.map(({type, quantity}) => (
          <div key={type} className="resource-container">
            <div className={`resource ${type}`} />
            <div className="counter">{quantity}</div>
          </div>
        ))}
        {playerTurn === player.playerNumber && (
          <div className="section-btns">
            <button onClick={newDiceRoll} className="btn" type="button">
              Roll
            </button>
            <button
              className="btn"
              onClick={() => {
                toggleModal('build')
                changeGamePhase(null)
              }}
              type="button"
            >
              Build
            </button>
            <button
              className="btn"
              onClick={() => toggleModal('trade')}
              type="button"
            >
              Trade
            </button>
            <button
              className="btn"
              onClick={() => {
                changePhase('development')
                toggleModal('showDevCards')
              }}
              type="button"
            >
              Development Cards
            </button>
            <button
              className="btn"
              onClick={() => nextPlayerThunk(player.playerNumber)}
              type="button"
            >
              Next Player
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerControls
