import React from 'react'

import { Navs } from '@/components'
import { connect } from 'react-redux'
import './style.scss'
import { deleteGood } from '@/store/actions/cartAction'

class Cart extends React.Component {
  delete(ele) {
    console.log(ele)
    this.props.deleteGood(ele)
    // 强制更新
    this.forceUpdate()
    // this.setState({})
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>购物车</h1>

        {
          this.props.list.map((ele,idx)=>{
            return(
              <div key={ele.id} className='cart_good_row'>
                <span>{ele.id}</span>
                <span>{ele.name}</span>
                <span onClick={this.delete.bind(this, ele)}>删除</span>
              </div>
            )
          })
        }

        <Navs></Navs>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.cartReducer.list
  }
}

function mapActionToProps(dispatch) {
  return {
    deleteGood: (payload)=>dispatch(deleteGood(payload))
  }
}


export default connect(mapStateToProps, mapActionToProps)(Cart)
