import { createRouter, createWebHistory } from 'vue-router'
import Races from './pages/Races.vue'
import Home from './pages/Home.vue'

const routerPlugin = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/races', name: 'Races', component: Races },
  ],
})

export default routerPlugin
