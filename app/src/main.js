// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import filter from './utils/filter'
import store from './store'
import '../style/app.scss';

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#CD486b',
    secondary: '#7EA2AA',
    accent: '#B5CBB7'
  }
}),
 
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  filter,
  router,
  store
}).$mount('#app')
