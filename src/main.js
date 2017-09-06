// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router'
// import iconfont from 'material-design-icons/iconfont'
import MuseUi from './muse-ui.config'

// museui carbon主题
import 'muse-ui/dist/theme-carbon.css'
// import 'muse-ui/dist/theme-light.css'
// import 'muse-ui/dist/theme-dark.css'
// import 'muse-ui/dist/theme-teal.css'

Vue.use(MuseUi)

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/lazy.jpg',
  loading: './static/img/lazy.jpg',
  attempt: 2,
  listenEvents: ['scroll']
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  // 组件创建前，请求用户数据
  beforeCreate () {
  }
})
