import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons, IconsPlugin, BIconBag, BIconArrowRight } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue, BootstrapVueIcons, IconsPlugin)
Vue.component('BIconBag', BIconBag)
Vue.component('BIconArrowRight', BIconArrowRight)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
