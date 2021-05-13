import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Store from './store/_index'
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: Store,
  modules: {
  },
  render: h => h(App),
}).$mount('#app')
