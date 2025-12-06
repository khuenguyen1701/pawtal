import { createRouter, createWebHistory } from 'vue-router'
import { currentUser, currentUserRole } from "../firebase.js"

import Home from '../components/LandingPage.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import EventPage from '../components/EventPage.vue'
import ManagePage from '../components/ManagePage.vue'
import CreateEvent from '../components/CreateEvent.vue'
import EventList from '@/components/EventList.vue'
import { compile } from 'vue'
import RoleSelection from '../components/RoleSelection.vue'
import ClubInfoForm from '../components/ClubInfoForm.vue'

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
  {
  path: '/choose-role',
  name: 'ChooseRole',
  component: RoleSelection
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
    path: '/events',
    name: 'EventList',
    component: EventList,
    props: true,
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    component: CreateEvent,
  },
  // { path: '/managepage', 
  //   name: 'ManagePage', 
  //   component: ManagePage 
  // },
  {
  path: '/org/info',
  name: 'ClubInfoForm',
  component: ClubInfoForm,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = currentUser.value
  const role = currentUserRole.value

  // 1️⃣ Allow ChooseRole page
  if (from.name === "ChooseRole") {
    return next()
  }

  // 2️⃣ Allow organizer setup page
  if (to.name === "ClubInfoForm") {
    return next()
  }

  // 3️⃣ Prevent users with role from reopening ChooseRole
  if (role && to.name === "ChooseRole") {
    return next("/home")
  }

  // 4️⃣ Force role selection ONLY if user has no role yet
  if (user && !role && to.name !== "ChooseRole") {
    return next("/choose-role")
  }

  // 5️⃣ Restrict ManagePage
  if (to.name === "ManagePage") {
    if (!user) return next("/login")
    if (role !== "faculty") return next("/home")
  }

  next()
})

export default router
