import {
  SONG_ADD,
  SONG_GET_LIST,
  SONG_GET_LIST_QQ
} from '../actionTypes'
import fetch from '@/utils/fetch'

// 同步actions  ==> Vuex Mutations
export function addSong(payload) {
  return {
    type: SONG_ADD,
    payload: payload
  }
}

// 异步数据  ==> Vuex Actions
export function getSongList(data) {
  return function(dispatch) {
    fetch('/db/song.json', 'GET', data, res=>{
      // 调接口成功时，发出第2个dispatch==>action
      dispatch({
        type: SONG_GET_LIST,
        payload: res
      })
    })
  }
}


export function getSongListFromQQ() {
  const api = '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=65442751747450876&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

  return function(dispatch) {
    fetch(api, 'GET', {}, res=>{
      // 调接口成功时，发出第2个dispatch==>action
      console.log('xxxxx', res)
      dispatch({
        type: SONG_GET_LIST_QQ,
        payload: res
      })
    })
  }
}
