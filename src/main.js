import Vue from 'vue'
import App from './App'
import commonJs from './utils/common.js'
import httpWX from './utils/http.js'

Vue.prototype.$commonjs = commonJs
Vue.prototype.$httpWX = httpWX
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
