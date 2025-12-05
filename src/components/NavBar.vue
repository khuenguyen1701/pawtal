<template>
  <nav class="navbar">
    <div class="nav-left">
      <!-- Logo -->
      <h1 class="logo">PAWTAL</h1>

      <!-- Search Bar -->
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Search" />
      </div>
    </div>

    <div class="nav-right">
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/myevent" class="nav-link">My Event</router-link>
      <router-link to="/login" class="nav-link">Login/Signup</router-link>
    </div>
  </nav>
</template>

<script setup>
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

/* Logo */
.logo {
  color: #f4d764;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  background-color: #f4d764;
  padding: 10px 14px;
  border-radius: 4px;
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

/* RIGHT NAV LINKS */
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
}

.nav-link:hover {
  color: #f4d764;
}
</style>
