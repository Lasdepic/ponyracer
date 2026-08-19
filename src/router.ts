import { createRouter, createWebHistory } from 'vue-router'
import Races from './pages/Races.vue'
import Home from './pages/Home.vue'
import Register from './pages/Register.vue'

const routerPlugin = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/races', name: 'Races', component: Races },
    { path: '/register', name: 'Register', component: Register },
  ],
})

export default routerPlugin
