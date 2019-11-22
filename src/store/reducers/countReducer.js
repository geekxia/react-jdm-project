import {
  COUNT_ADD,
  COUNT_SUB
} from '../actionTypes'

let initState = {
  count: 0
}

export default function countReducer(state=initState, action) {
  switch (action.type) {
    case COUNT_ADD:
      let count = state.count + action.payload
      // state快照
      let newState = {...state, ...{count}}   // ES6对象合并
      return newState
      // return Object.assign({}, state, {count})  // ES5对象合并
    case COUNT_SUB:
      return {...state, ...{count: state.count - action.payload}}
    default:
      return state
  }
}
