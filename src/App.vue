<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import Navbar from './components/Navbar.vue'
import Alert from './components/Alert.vue'

const error = ref(false)

onErrorCaptured(() => {
  error.value = true
  return false
})
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Alert v-if="error" variant="danger" dismissible @dismissed="error = false">
      An error occurred while loading.
    </Alert>
    <Suspense timeout="0">
      <component :is="Component" />
      <template #fallback>
        <div role="status">Loading.</div>
      </template>
    </Suspense>
  </RouterView>
</template>
