import React from 'react'

import { connect } from 'react-redux'
import { addCount, subCount } from '@/store/actions/countAction'
import { addTodo } from '@/store/actions/todoAction'

class Test extends React.Component {
  componentDidMount() {
    console.log('test props', this.props)
  }

  add() {
    console.log('add')
    this.props.addCount(10)
  }
  sub() {
    console.log('sub')
    this.props.subCount(10)
  }

  addTodoHandle() {
    this.props.addTodo(Date.now())
  }


  render() {
    return(
      <div>
        <h1>测试 Redux</h1>
        <hr/>
        <button onClick={this.add.bind(this)}>加</button>
        <button onClick={this.sub.bind(this)}>减</button>
        <hr/>
        <h1>{this.props.count}</h1>
        <hr/>
        <button onClick={this.addTodoHandle.bind(this)}>添加一条todo</button>
        {
          this.props.todolist.map((ele,idx)=>{
            return <div key={ele}>{ele}</div>
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.countReducer.count,
    todolist: state.todoReducer.todolist
  }
}
function mapActionToProps(dispatch) {  // mapMutations mapActions
  return {
    addCount: (payload)=>dispatch(addCount(payload)),
    subCount: (payload)=>dispatch(subCount(payload)),
    addTodo: (payload)=>dispatch(addTodo(payload))
  }
}

// Test  UI组件  User Interface
// connect、withRouter 容器组件

export default connect(mapStateToProps, mapActionToProps)(Test)
