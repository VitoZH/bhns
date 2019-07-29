import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(Vant)
Vue.use(VeeValidate)

Validator.localize('zh_CN', zh_CN)
// 自定义验证规则
Validator.extend('phone', {
  getMessage: field => field + '格式不正确',
  validate: value => {
    return value.length === 11 && /^((13|15|16|17|18)[0-9]{1})\d{8}$/.test(value)
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
