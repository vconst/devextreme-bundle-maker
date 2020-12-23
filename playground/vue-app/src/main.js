import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false;
Vue.config.performance = false;

import Button from './components/Button.vue'
import CheckBox from './components/CheckBox.vue'
import DataGridLightPage from './components/data_grid_light_page';
import ComponentNestingPage from './components/component_nesting_page';


const routes = [
  { path: '/button/:type', component: Button, props: true },
  { path: '/check_box/:type', component: CheckBox, props: true },
  { path: '/data_grid_light_page', component: DataGridLightPage, props: true },
  { path: '/component_nesting_page', component: ComponentNestingPage, props: true },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
