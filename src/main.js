import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import "@/assets/styles/common.scss";
import "@/assets/styles/variables.scss";

Vue.use(ElementUI)
Vue.config.productionTip = false

const router = createRouter()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
