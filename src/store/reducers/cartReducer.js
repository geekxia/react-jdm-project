import {
  CART_ADD_GOOD,
  CART_DELETE_GOOD
} from '../actionTypes'

let initState = {
  list: [
    { id: 1, name: '笔记本', price: '2000'},
    { id: 2, name: '笔记本', price: '2000'},
    { id: 3, name: '笔记本', price: '2000'}
  ]
}

export default function cartReducer(state=initState, action) {
  switch (action.type) {
    case CART_ADD_GOOD:
      console.log('添加=========>', action.payload)
      let list = state.list
      list.push(action.payload)
      return {...state, list}
    case CART_DELETE_GOOD:
      console.log('删除=========>', action.payload)
      let list2 = state.list
      list2.map((ele,idx)=>{
        if (ele.id === action.payload.id) {
          console.log('=======================', idx)
          list2.splice(idx, 1)
        }
        return false
      })
      console.log('list2', list2)
      return {...state, list: list2}
    default:
      return state
  }
}
