/* eslint-disable no-undef */
var stream = weex.requireModule('stream')

var baseURL = 'http://loan.v1.guangjuhuizhan.cn/v1/'
/**
 * 将weex自带的stream 封装成符合 fetch规范的 异步操作
 * @param  {Object} [options={}] [description]
 * @return {[type]}              [description]
 */
const http = (options = {}) => {
  // util.showDialog()
  return new Promise((resolve, reject) => {
    stream.fetch(options, (res) => {
      // util.hiddenDialog()
      if (res.ok) {
        resolve(res.data)
      } else {
        reject(res)
      }
    })
  })
}
const getUrl = (url) => {
  if (url.indexOf('://') === -1) {
    url = baseURL + url
  }
  return url
}
export default {
  get (url, param = {}) {
    let query = []
    Object.keys(param).forEach((item) => {
      query.push(`${item}=${encodeURIComponent(param[item])}`)
    })
    let params = query.length > 0 ? '?' + query.join('&') : ''  // fixme

    return http({
      method: 'GET',
      type: 'json',
      url: getUrl(url) + params
    })
  },
  post (url, param = {}) {
    return http({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'json',
      body: JSON.stringify(params),
      url: getUrl(url)
    })
  },
  postForm (url, param = {}) {
    return http({
      method: 'POST',
      type: 'json',
      body: JSON.stringify(params),
      url: getUrl(url)
    })
  }
}
