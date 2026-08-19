<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import Alert from './components/Alert.vue'

const error = ref(false)

onErrorCaptured(() => {
  error.value = true
  return false
})
</script>

<template>
  <Navbar />
  <main class="container" style="margin-top: 50px">
    <h1 class="text-center fw-bold text-dark mb-4 p-2">Ponyracer</h1>
    <Alert v-if="error" variant="danger" :dismissible="true" @dismissed="error = false">
      An error occurred while loading.
    </Alert>
    <Suspense>
      <template #default>
        <Races />
      </template>
      <template #fallback>
        <div role="status">Loading.</div>
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Races from './pages/Races.vue'
import Alert from './components/Alert.vue'

export default defineComponent({
  name: 'App',

  components: {
    Navbar,
    Races,
    Alert,
  },
})
</script>

<style scoped></style>
