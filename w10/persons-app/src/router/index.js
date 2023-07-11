import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/About.vue') /* webpackChunkName: "about" */ 
  },
  {
    path: '/cos30043',
    name: 'COS30043',
    component: () => import('../components/cos30043.vue')
  },
  {
    path: '/persons',
    name: 'Persons',
    component: () => import('../components/Persons.vue')
  },
  {
    path: '/personsCreate',
    name: 'PersonsCreate',
    component: () => import('../components/PersonsCreate.vue')
  },
  {
    path: '/personsUpdate',
    name: 'PersonsUpdate',
    component: () => import('../components/PersonsUpdate.vue')
  },
  {
    path: '/personsDelete',
    name: 'PersonsDelete',
    component: () => import('../components/PersonsDelete.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
