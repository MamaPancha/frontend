import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/menuadmin',
    name: 'MenuAdmin',
    component: () => import('../views/MenuAdmin.vue')
  },
  {
    path: '/registrousuario',
    name: 'RegistroUsuario',
    component: () => import('../views/RegistroUsuario.vue')
  },
  {
    path: '/tablaadmin',
    name: 'TablaAdmin',
    component: () => import('../views/TablaAdmin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
