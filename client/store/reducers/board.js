import {
  GET_BOARD,
  CREATE_ROAD,
  CREATE_SETTLEMENT,
  MOVE_ROBBER,
  BUILD_CITY
} from '../actions'
import Board from '../../board'

const defaultBoard = new Board()

export default function(state = defaultBoard, action) {
  switch (action.type) {
    case GET_BOARD:
      return action.board
    case CREATE_ROAD: {
      const newBoard = new Board(JSON.stringify(state))
      newBoard.edges[action.id].color = action.color
      newBoard.edges[action.id].player = action.number
      return newBoard
    }
    case CREATE_SETTLEMENT:
      return {
        ...state,
        vertices: {
          ...state.vertices,
          [action.id]: {
            ...state.vertices[action.id],
            color: action.color,
            player: action.number,
            locationType: 'settlement'
          }
        }
      }
    case BUILD_CITY:
      return {
        ...state,
        vertices: {
          ...state.vertices,
          [action.id]: {
            ...state.vertices[action.id],
            locationType: 'city'
          }
        }
      }
    case MOVE_ROBBER: {
      let resource
      for (const res in state.resources) {
        if (state.resources[res].id === action.resourceId) {
          resource = state.resources[res]
        }
      }
      return {...state, robberLocation: resource}
    }
    default:
      return state
  }
}
