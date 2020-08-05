import Vue from 'vue'
import App from './App.vue'
import Clientes from './components/Clientes.vue'
import Home from './components/Home.vue'
import Sobre from './components/Sobre.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: "/", component: Home},
  {path: "/sobre", component: Sobre},
  {path: "/clientes", component: Clientes}
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
