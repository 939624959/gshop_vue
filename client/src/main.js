import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用路由
  store  //使用vuex
})
