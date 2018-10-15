// to do
// - w mdesign importowac tylko poszczegolne elementy !!!

import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import 'vue-material/dist/theme/black-green-dark.css'
// import 'vue-material/dist/theme/black-green-light.css'
// import 'vue-material/dist/theme/default-dark.css'

import moment from 'moment'
import UUID from 'vue-uuid'

Vue.use(UUID)
Vue.use(VueMaterial)

Vue.prototype.moment = moment

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
