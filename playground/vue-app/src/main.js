import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false;
Vue.config.performance = false;

import Button from './components/Button.vue'
import CheckBox from './components/CheckBox.vue'

const routes = [
  { path: '/button/:type', component: Button, props: true },
  { path: '/check_box/:type', component: CheckBox, props: true },

]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
