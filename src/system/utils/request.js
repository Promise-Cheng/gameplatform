import axios from 'axios'
import {Message} from "element-ui";

const http = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    //    'Authorization': `Bearer ${token}`
  },
  timeout: 50000,
  withCredentials: true
})

// 在可以在这里对处理 config 对象
http.interceptors.request.use(config => {
  config.params = config.params || {}
  config.data = config.data || {}
  // 必须要返回配置对象
  return config
})

// 在这里预处理后台响应的数据
http.interceptors.response.use(
  response => {
    // 这里的 res 是后台返回的数据
    const res = Object(response.data)
    //目前先加一层判断 因为mock数据没做code
    if (res.code !== undefined) {
      // 如果 code 为 0 表示正常数据，那就直接返回 data
      if (res.code == 0) return res.data
      if (res.code == -30) {
        Message({
          message: res.message || `出现未知的系统错误，错误代码: ${res.code || -1}`,
          type: 'error'
        })
        return
      }
      // 非 0 就直接到错误处理
      Message({
        message: res.message || `出现未知的系统错误，错误代码: ${res.code || -1}`,
        type: 'error'
      })
      return Promise.reject(
        new Error(
          res.message || `出现未知的系统错误，错误代码: ${res.code || -1}`
        )
      )
    } else {
      return res
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // loginToken()
          break
        case 400:
          return Promise.reject(
            new Error(`系统内部错误：${error.response.data.title}`)
          )
      }
    }
    return Promise.reject(error)
  }
)

/**
 * post 方法
 * @param url 请求地址
 * @param data  请求参数
 * @returns {*} promise
 */
function post(url, data, config) {
  return http.post(url, data, config)
}

/**
 * get 方法
 * @param url 请求地址
 * @param params 请求参数
 * @returns {*} promise
 */
function get(url, params, config) {
  return http.get(url, {
    params,
    ...config
  })
}

/**
 * put 请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
function put(url, data = {}, config) {
  return http.put(url, data, config)
}

/**
 * patch请求
 * @param url 请求地址
 * @param data 请求参数
 * @returns {Promise<any>}
 */
function patch(url, data = {}, config) {
  return http.patch(url, data, config)
}

/**
 * delete请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns {Promise<any>}
 */
function del(url, params, config) {
  return http.delete(url, {
    params,
    ...config
  })
}

export {get, post, put, del, patch}

export default http
