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
  <main class="pr-main">
    <RouterView v-slot="{ Component }">
      <Alert
        v-if="error"
        variant="danger"
        dismissible
        class="mx-3 mx-md-auto mt-3"
        style="max-width: 900px"
        @dismissed="error = false"
      >
        An error occurred while loading.
      </Alert>
      <Suspense timeout="0">
        <component :is="Component" />
        <template #fallback>
          <div class="pr-loading">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span>Loading...</span>
          </div>
        </template>
      </Suspense>
    </RouterView>
  </main>
</template>
