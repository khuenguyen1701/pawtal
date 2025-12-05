<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style scoped>
.container{
  padding-top: 4.3rem;
  margin:0;
}
</style>
