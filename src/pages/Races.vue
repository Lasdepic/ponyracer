<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { RaceModel } from '../models/RaceModel'
import Race from '../components/Race.vue'
import { useRaceService } from '../composables/RaceService'

const races = ref<Array<RaceModel>>([])

const raceService = useRaceService()

onMounted(async () => {
  try {
    races.value = await raceService.list()
  } catch {
    error.value = true
  }
})
</script>

<template>
  <div>
    <h1 class="mb-4 border border-dark text-center text-warning bg-dark rounded">
      Course de Poney
    </h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      An error occurred while loading.
      <button type="button" class="btn-close" aria-label="Close" @click="error = false"></button>
    </div>

    <Race v-for="race in races" :key="race.id" :raceModel="race" />
  </div>
</template>
