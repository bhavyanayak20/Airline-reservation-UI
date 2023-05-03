import Vue from 'vue'
import VueRouter from 'vue-router'
import Searchflight from '@/views/Searchflight.vue'
import Listflight from '@/components/Listflight.vue'
import Login from '@/views/Login.vue'
import Mybooking from '@/components/Mybooking.vue'
import Contact from '@/components/Contact.vue'
import condition from '@/components/condition.vue'
import Dashboard from '@/components/Dashboard.vue'
import PassengerInfo from '@/components/PassengerInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Searchflight',
    component: Searchflight,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/listflight/',
    name: 'listflight',
    component: Listflight
  },
  
  {
    path: '/mybooking',
    name: 'Mybooking',
    component: Mybooking,
  },
  {
    path: '/passenger/:id',
    name: 'PassengerInfo',
    component: PassengerInfo,
  },
  {
    path: '/condition',
    name: 'condition',
    component: condition,
  },
  {
    path: '/fees',
    name: 'fees',
    component: () => import('@/components/fees.vue'),
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import('@/components/Destination.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
