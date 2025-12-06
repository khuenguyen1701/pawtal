<template>
  <nav class="navbar">
    <div class="nav-left">
      <h1 class="logo">PAWTAL</h1>

      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Search" />
      </div>
    </div>

    <div class="nav-right">
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/myevent" class="nav-link">My Event</router-link>

        <router-link
        v-if="currentUserRole === 'faculty'"
        to="/managepage"
        class="nav-link"
        >
        Manage
        </router-link>

      <router-link v-if="!currentUser" to="/login" class="nav-link">
        Login/Signup
      </router-link>

      <template v-else>
        <span class="nav-link welcome">Welcome, {{ displayName }}</span>
        <button class="logout-btn" @click="logout">Logout</button>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import { currentUser, currentUserRole, auth } from "../firebase.js"
import { signOut } from "firebase/auth"

const router = useRouter()

const displayName = computed(() => {
  if (!currentUser.value) return ""
  return (
    currentUser.value.displayName ||
    currentUser.value.email.split("@")[0]
  )
})

const logout = async () => {
  try {
    console.log("Logging out...")
    await signOut(auth)
    console.log("Logout successful")
    router.push("/home") 
  } catch (err) {
    console.error("Logout error:", err)
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 90px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 50px;
}

.logo {
  color: #f4d764;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  font-family: 'Instrument Sans', sans-serif;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 14px;
  border-radius: 20px;
  width: 250px;
}

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
}

.search-icon {
  font-size: 18px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  color: #e8e8e8;
  font-size: 22px;
  text-decoration: none;
  transition: 0.2s ease;
  font-family: 'Instrument Sans', sans-serif;
}

.nav-link:hover {
  color: #f4d764;
}

.logout-btn {
  background: transparent;
  border: 2px solid #f4d764;
  color: #f4d764;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease;
}

.logout-btn:hover {
  background: #f4d764;
  color: #000;
}
</style>
