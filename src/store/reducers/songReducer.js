import {
  SONG_ADD,
  SONG_GET_LIST,
  SONG_GET_LIST_QQ
} from '../actionTypes'

let initState = {
  list: [],
  jay: {}
}

export default function songReducer(state=initState, action) {
  switch (action.type) {
    case SONG_ADD:
      let list = [...state.list, action.payload]
      return { ...state, ...{list} }
    case SONG_GET_LIST:
      return { ...state, ...{list:[...state.list, ...action.payload]} }
    case SONG_GET_LIST_QQ:
      return {...state, jay: action.payload}
    default:
      return state
  }
}
