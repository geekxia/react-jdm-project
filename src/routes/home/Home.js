import React from 'react'

import { Navs } from '@/components'
import { connect } from 'react-redux'
import { addGood } from '@/store/actions/cartAction'

class Home extends React.Component {
  buy() {
    console.log('buy')
    this.props.addGood({
      id: Date.now(),
      name: '笔记本',
      price: '9000'
    })

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>首页</h1>
        <button onClick={this.buy.bind(this)}>购买商品</button>
        <Navs></Navs>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapActionToProps(dispatch) {
  return {
    addGood: (payload)=>dispatch(addGood(payload))
  }
}



export default connect(mapStateToProps, mapActionToProps)(Home)
