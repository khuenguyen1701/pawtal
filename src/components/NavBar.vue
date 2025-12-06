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
      <router-link to="/myevent" class="nav-link">Saved Event</router-link>
      <router-link to="/login" class="nav-link login-link">
        <i class="fa-regular fa-user"></i>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
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
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--color-primary-accent);
  padding: 5px 10px;
  border-radius: 2px;
  width: 100%;
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
}

.nav-link:hover {
  color: var(--color-primary);
}

.login-link i {
  font-size: 18px;
}
</style>
