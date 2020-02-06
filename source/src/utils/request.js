import axios from 'axios'
// import { baseUrl } from '../../../vue.config'
// import { Message } from 'element-ui'
import router from '../router'
import store from '../store'
// import electron from 'electron'
// import path from 'path'
// import fs from 'fs'

// function parseDataFile (filePath, prop, defaults) {
//   // from https://medium.com/cameron-nokes/how-to-store-user-data-in-electron-3ba6bf66bc1e
//   try {
//     const data = JSON.parse(fs.readFileSync(filePath))
//     return data[prop]
//   } catch (error) {
//     // if there was some kind of error, return the passed in defaults instead.
//     return defaults
//   }
// }

// const defaults = process.env.BASE_API
// const userDataPath = (electron.app || electron.remote.app).getPath('userData')
// const urlpath = path.join(userDataPath, 'baseURL.json')
// const baseURL = parseDataFile(urlpath, 'baseURL', defaults)

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8082', // api的base_url
  timeout: 150000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
  // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data
    console.log(res)
    if (parseInt(res.error_code) !== 0) {
      console.log('disini')
      if (parseInt(res.error_code) !== 100) {
        /* Message({
          message: res.error_desc,
          type: 'error',
          duration: 5 * 1000
        }) */
      } else {
        /* Message({
          message: 'Token expired, silahkan login ulang untuk mendapatkan token baru',
          type: 'Info',
          duration: 2 * 1000
        }) */
        store.dispatch('FedLogOut').then(() => {
          router.push('/login')
        })
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    } else {
      console.log('here')
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    /* Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    }) */
    return Promise.reject(error)
  }
)

export default service
