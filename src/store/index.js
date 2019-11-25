import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

// 使用中间件，解决异步数据请求
import thunk from 'redux-thunk'

import countReducer from './reducers/countReducer'
import todoReducer from './reducers/todoReducer'
import songReducer from './reducers/songReducer'
import cartReducer from './reducers/cartReducer'

// 合并所有的纯函数reducer，reducer用于改变store
const rootReducer = combineReducers({
  countReducer,
  todoReducer,
  songReducer,
  cartReducer
})


// 创建store  applyMiddleware()使用中间件解决异步数据问题
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

// 小结：

// redux
//   createStore,  用于创建唯一的store
//   combineReducers,  用于合并多个Reducer纯函数
//   applyMiddleware  使用中间件，比如使用redux-thunk来解决异步数据请求
//
// react-redux
//   <Provider store={store}>
//   connect(mapStateToProps, mapActionToProps)(UiComponent)
//
// redux-thunk
//   来解决异步数据请求
//   异步数据需要三个action  {type:'', payload: ''}
//   同步数据只需要一个action
