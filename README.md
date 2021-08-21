
## 目录结构

```bash
Project files/
├── .vscode/
├── api/                                ---- 公共接口服务
├── config/                             ---- 静态资源
│   └── proxy.js                        ---- 代理配置，说明详见 https://github.com/chimurai/http-proxy-middleware
├── public/
├── src/
│   ├── assets/                         ---- 公共资源
│   │   ├── images                      ---- 公共图片
│   │   └── styles                      ---- 全局样式
│   ├── store/                          ---- vuex
│   ├── views/                          ---- 多页面入口，注意新增的页面必须在 config/index 写配置，在新增页面的文档上有说明
│   │   ├── index/                      ---- 首页
│   │   │   ├── models/                 ---- vuex 模块，会自动加载
│   │   │   ├── routes/                 ---- 注意按模块拆分路由，会自动加载
│   │   │   ├── views/                  ---- 路由视图文件
│   │   │   ├── config.js               ---- 当前应用配置文件
│   │   │   ├── router.js               ---- 如果应用不需要路由可以去除
│   │   │   └── main.js                 ---- 单应用入口文件，每一个页面都需要存在
│   │   └── login/
│   └── system/                         ---- 公共函数
├── package.json
├── vue.config.js                      ---- vue-cli 3.x 配置
└── README.md
```

## 启动项目

你需要安装 [node.js][node.js] 的版本为 `nodejs >= 8.0`。

克隆此仓库后运行:

```shell
# 安装依赖，推荐使用 yarn 或 cnpm 安装
$ npm install

# 启动本地服务
$ npm run serve
```

在 `package.json` 文件的 `scripts` 部分还有一些其他脚本可用.

## 版本发布

```bash
# 构建生产代码
$ npm run build
```