import {
  TODO_ADD
} from '../actionTypes'

let initState = {
  todolist: [1,2,3,4]
}

export default function todoReducer(state=initState, action) {
  switch (action.type) {
    case TODO_ADD:
      let newArr = [...state.todolist, action.payload]
      return {...state, ...{todolist: newArr}}
    default:
      return state
  }
}
