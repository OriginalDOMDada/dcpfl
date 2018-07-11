import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueCarousel from "vue-carousel"

Vue.use(BootstrapVue)
Vue.use(VueCarousel)

new Vue({
  el: '#app',
  render: h => h(App)
})
