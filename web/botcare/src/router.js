import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Prescription from './views/Prescription.vue'
import Queries from './views/Queries.vue'
import Doctor from './views/Doctor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/prescription',
      name: 'prescription',
      component: Prescription
    },
    {
      path: '/queries',
      name: 'queries',
      component: Queries
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    }

  ]
})
