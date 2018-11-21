import socket from '../../socket'
import {
  START_GAME,
  NEXT_PLAYER,
  SET_GAME_USERS,
  DISTRIBUTE_RESOURCE,
  ROLL_DICE,
  TOGGLE_MODAL,
  MAKE_OFFER,
  RECEIVE_OFFER
} from '../actions'

const defaultState = {
  playerTurn: 1,
  modle: false,
  players: [
    {id: 1, resources: 0, score: 0},
    {id: 2, resources: 0, score: 0},
    {id: 3, resources: 0, score: 0},
    {id: 4, resources: 0, score: 0}
  ],
  currentTrade: {offerCards: [], wantCards: []},
  die1: 0,
  die2: 0
}

/* eslint-disable complexity */
const gameState = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GAME_USERS:
      return {...state, players: action.users}
    case START_GAME:
      return {...state, playerTurn: action.playerTurn, modle: action.modle}
    case NEXT_PLAYER:
      return {
        ...state,
        playerTurn: action.playerNumber + 1 < 5 ? action.playerNumber + 1 : 1
      }
    case TOGGLE_MODAL:
      return {...state, modle: action.modal}
    case DISTRIBUTE_RESOURCE:
      return {
        ...state,
        players: state.players.map(player => {
          return player.id === action.id
            ? {...player, resources: player.resources + 1}
            : player
        })
      }
    case ROLL_DICE:
      return {
        ...state,
        die1: action.dieRolls[0],
        die2: action.dieRolls[1]
      }
    case MAKE_OFFER:
      return {
        ...state,
        currentTrade: action.currentTrade
      }
    case RECEIVE_OFFER:
      console.log('RECEIVE_OFFER', action.currentTrade)
      return {
        ...state,
        currentTrade: action.currentTrade
      }
    default:
      return state
  }
}

export default gameState
