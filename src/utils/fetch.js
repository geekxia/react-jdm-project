import axios from 'axios'

export default function fetch(api, method, data, callback) {
  axios({
    url: 'http://localhost:8000'+api,
    method: method,
    data: data
  }).then(res=>{
    console.log('成功', res)
    let data = null
    if (res.data.code === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('错误', err)
  }).then(()=>{
    // 总会执行
  })
}
