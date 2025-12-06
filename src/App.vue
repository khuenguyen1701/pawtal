<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import NavBar from "./components/NavBar.vue";
import Footer from './components/Footer.vue';

const route = useRoute()

const hideOn = ['/login', '/signup']

const showNavbar = computed(() => !hideOn.includes(route.path))
</script>

<template>
  <div>
    <NavBar v-if="showNavbar" />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style>
.container {
  padding-top: 5rem;
  margin: 0;
}
</style>
