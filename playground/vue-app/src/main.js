import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.config.performance = true;

import Button from './components/Button.vue'


const routes = [
  { path: '/button/:type', component: Button, props: true },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
