import React from 'react'
import BuildModal from './BuildModal'
import DevCardModal from './DevCardModal'
import RobberModal from './RobberModal'
import TradeModal from './TradeModal'

const Modle = ({visible, toggleModal, player, robberDiscardThunk}) => {
  const setUpModal = modalType => {
    switch (modalType) {
      case 'build':
        return <BuildModal toggleModal={toggleModal} />
      case 'showDevCards':
        return <DevCardModal toggleModal={toggleModal} />
      case 'robber':
        return (
          <RobberModal
            player={player}
            toggleModal={toggleModal}
            robberDiscardThunk={robberDiscardThunk}
          />
        )
      case 'trade':
        return <TradeModal toggleModal={toggleModal} />
      default:
        return <div />
    }
  }

  return (
    <div className={`game-modle ${visible && 'game-modle-active'}`}>
      {setUpModal(visible)}
    </div>
  )
}

export default Modle
