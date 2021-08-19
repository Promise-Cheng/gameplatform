<template>
  <div id="app">
    <keep-alive :include="caches">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      caches: []
    }
  },
  watch: {
    $route: 'handleRouteChange'
  },
  methods: {
    /**
     * 处理路由变化
     *
     * @private
     *
     * @param {import('vue-router').Route} route 路由对象
     */
    handleRouteChange(route) {
      // 404 路由或单独控制
      if (route.matched.length === 0 || route.meta.tabsView === false) return
      // 添加标签页
      this.addTab(route)
    },
    /**
     * 新增标签页
     *
     * @public
     *
     * @param {import('vue-router').Route} route 路由对象
     *
     * @return {void}
     */
    addTab(route) {
      // 判断是否已经存在
      const index = caches.findIndex(item => item === route.name)
      if (index === -1) {
        // 添加缓存
        if (route.cache) {
          this.caches.push(route.name)
        }
      }
    },
  }

}
</script>