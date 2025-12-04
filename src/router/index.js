import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'


const routes = [
  // swap signup to come after home later
  { path: '/', redirect: '/signup' },
  { path: '/', name: 'Home', component: Home},
  { path: '/login', name: 'Login', component: Login},
  { path: '/signup', name: 'SignUp', component: SignUp},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
