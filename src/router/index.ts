import { createRouter, createWebHistory } from 'vue-router'

// Páginas
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Animales from '../pages/Animales.vue'
import Inseminaciones from '../pages/Inseminaciones.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/animales', component: Animales },
  { path: '/inseminaciones', component: Inseminaciones }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

