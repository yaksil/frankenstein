import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/_index'
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  modules: {
    store,
  },
  render: h => h(App),
}).$mount('#app')
