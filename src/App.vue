<script setup lang="ts"></script>

<template>
  <Navbar />
  <main class="container" style="margin-top: 50px">
    <h1 class="text-center fw-bold text-dark mb-4 p-2">Ponyracer</h1>
    <Races />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Races from './pages/Races.vue'

export default defineComponent({
  name: 'App',

  components: {
    Navbar,
    Races,
  },
})
</script>

<style scoped></style>
