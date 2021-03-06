import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store'

// 导入全局样式
import '@/styles/global.less'

// 完整引入
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
