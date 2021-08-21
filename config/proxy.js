/**
 * 默认配置
 *
 * @link https://github.com/chimurai/http-proxy-middleware#http-proxy-options
 * @type {import('http-proxy-middleware').Config}
 */
const proxyOptions = {
  // 代理目标
  target: 'http://localhost:8085',
  // 修改请求头的 Origin 为 target 值
  changeOrigin: true
}

/**
 * HTTP 代理配置
 *
 * @link https://cli.vuejs.org/zh/config/#devserver-proxy
 * @type {import('webpack-dev-server').ProxyConfigMap}
 */
module.exports = {
  '': {
    ...proxyOptions
  },
  '/mediinfo-bhis-bingren': {
    ...proxyOptions
    // target: 'http://localhost:46011/',
  },
}
