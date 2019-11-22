import React from 'react'

import { connect } from 'react-redux'
import { addSong, getSongList, getSongListFromQQ } from '@/store/actions/songAction'

class Song extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      size: 10
    }
  }

  componentDidMount() {
    // 调接口时的入参
    const data = {
      page: this.state.page,
      size: this.state.size
    }
    this.props.getSongList(data)
    // 调用周杰伦音乐接口
    this.props.getSongListFromQQ()
  }
  addSong() {
    console.log('添加')
    this.props.addSong({id: Date.now(), name: '青花瓷', time: '2016'})
  }
  render() {
    console.log('song props', this.props)
    let { song } = this.props.jay
    return (
      <div>
        <h1>音乐</h1>
        <button onClick={this.addSong.bind(this)}>添加一条音乐</button>
        {
          this.props.list.map((ele,idx)=>{
            return (
              <div key={ele.id}>
                <span>{ele.id}</span>
                <span>{ele.name}</span>
                <span>{ele.time}</span>
              </div>
            )
          })
        }
        <hr/>
        {
          song && song.list.map((ele,idx)=>{
            return(
              <div key={ele.id}>{ele.name}</div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.songReducer.list,
    jay: state.songReducer.jay
  }
}

function mapActionToProps(dispatch) {
  return {
    // addSong: function(payload) {
    //   dispatch(addSong(payload))
    // }
    addSong: (payload)=>dispatch(addSong(payload)),
    getSongList: (data)=>dispatch(getSongList(data)),  // 调接口时，这是第一个dispatch
    getSongListFromQQ: ()=>dispatch(getSongListFromQQ())
  }
}



export default connect(mapStateToProps, mapActionToProps)(Song)
