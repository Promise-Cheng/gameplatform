import Vue from 'vue'
import VueRouter from 'vue-router'

import routers from './routes'

Vue.use(VueRouter)

export function createRouter() {
  const router = new VueRouter({
    routes: routers
  })
  //拦截器
  // eslint-disable-next-line no-unused-vars
  router.beforeEach(async (to, form, next) => {
    next()
  })
  return router
}