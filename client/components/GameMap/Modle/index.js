import React from 'react'
import BuildModal from './BuildModal'
import DevCardModal from './DevCardModal'

const Modle = ({visible, toggleModal, buyaCard}) => {
  return (
    <div>
      {visible === 'waiting' && (
        <div className="game-modle game-modle-active">
          <h1>Waiting for players...</h1>
        </div>
      )}
      {visible === 'build' && <BuildModal toggleModal={toggleModal} />}
      {visible === 'showDevCards' && (
        <DevCardModal toggleModal={toggleModal} buyaCard={buyaCard} />
      )}
    </div>
  )
}

export default Modle
