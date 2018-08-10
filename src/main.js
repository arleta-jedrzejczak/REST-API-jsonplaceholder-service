import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import { store } from './store/store'

import './../style/reset.css'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'hash'
});

Vue.http.options.emulateJSON = true

export const bus = new Vue()

new Vue({
  el: '#app',
  store: store,
  router: router,
  // router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
