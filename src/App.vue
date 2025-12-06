<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import NavBar from "./components/NavBar.vue";
import Footer from './components/Footer.vue';

const route = useRoute()

const hideOn = ['/login', '/signup', '/choose-role']

const showNavbar = computed(() => !hideOn.includes(route.path))
</script>

<template>
  <div>
    <NavBar v-if="showNavbar" />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style scoped>
.container {
  padding-top: 4.3rem;
  margin: 0;
}
</style>
