<template>
  <nav class="navbar">
    <div class="nav-left">
      <h1 class="logo">PAWTAL</h1>

      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" placeholder="Search" />
      </div>
    </div>

    <div class="nav-right">
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/events" class="nav-link">All Events</router-link>

        <router-link
        v-if="currentUserRole === 'faculty'"
        to="/managepage"
        class="nav-link"
        >
        Manage
        </router-link>

      <router-link v-if="!currentUser" to="/login" class="nav-link">
        Log In
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
  height: 60px;
  background-color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  font-family: var(--font-san);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 50px;
}

.logo {
  font-family: var(--font-serif);
  color: var(--color-primary);
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  font-family: 'Instrument Sans', sans-serif;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--color-primary-accent);
  padding: 5px 10px;
  border-radius: 2px;
  width: 100%;
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
  color: var(--text-dark);
  margin-left: 10px;
  width: 100%;
  font-family: var(--font-san);
}

.search-icon {
  font-size: 18px;
  color: var(--text-dark);
}

/* RIGHT LINKS */
.nav-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  color: var(--text-light);
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Instrument Sans', sans-serif;
}

.nav-link:hover {
  color: var(--color-primary);
}

.login-link i {
  font-size: 18px;
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
