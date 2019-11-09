import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'
import './utils/rem'
import router from './router'
import store from './store'
//import './assets/css/movie.css'


import { homeFilter } from './filters/index'
//循环遍历过滤器，因为项目中的过滤器不只一个
for(var key in homeFilter){
    Vue.filter(key , homeFilter[key])
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
