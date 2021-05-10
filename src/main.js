import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Movies from './componets/Movies.vue'
import Detail from './components/Detail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:
  [
    {path: '/', componet:Home},
    {path: '/movies', componet:Movies},
    {path: '/detail/:id', component:Detail}
  ],
  mode:"history"
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
