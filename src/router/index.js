import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/LandingPage.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import EventPage from '../components/EventPage.vue'
import ManagePage from '../components/ManagePage.vue'
import CreateEvent from '../components/CreateEvent.vue'

const routes = [
  { path: '/', redirect: '/home' },

  { path: '/home', 
    name: 'Home', 
    component: Home, 
    // meta: {requiresGuest: true}
  },

  { path: '/signup', 
    name: 'SignUp', 
    component: SignUp ,
    // meta: {requiresGuest: true}
  },

  { path: '/login', 
    name: 'Login', 
    component: Login,
    // meta: {requiresGuest: true}
  },
  { path: '/managepage', 
    name: 'ManagePage', 
    component: ManagePage,
    // meta: {requiresAuth: true}
  },

  {
    path: '/events/:id',
    name: 'EventPage',
    component: EventPage,
    props: true,
  },
  
  {
    path: '/org/create-event',
    name: 'CreateEvent',
    component: CreateEvent,
  },
  // { path: '/managepage', 
  //   name: 'ManagePage', 
  //   component: ManagePage 
  // },
  {
    path: '/events/:id',
    name: 'EventPage',
    component: EventPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
