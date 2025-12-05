import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/LandingPage.vue'
// import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import EventPage from '../components/EventPage.vue'
import ManagePage from '../components/ManagePage.vue'

const routes = [
  { path: '/', redirect: '/managepage' },

  // { path: '/home', name: 'Home', component: Home },

  // { path: '/login', name: 'Login', component: Login },
  // { path: '/signup', 
  //   name: 'SignUp', 
  //   component: SignUp 
  // },
  { path: '/managepage', 
    name: 'ManagePage', 
    component: ManagePage 
  },
  // {
  //   path: '/events/:id',
  //   name: 'EventPage',
  //   component: EventPage,
  //   props: true,
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
