<script setup lang="ts">
import type { RaceModel } from '../models/RaceModel'
import Race from '../components/Race.vue'
import { useRaceService } from '../composables/RaceService'

const raceService = useRaceService()

const races: Array<RaceModel> = await raceService.list()
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">
      <i class="fas fa-flag-checkered me-2"></i>Courses de Poney
    </h1>

    <Race v-for="race in races" :key="race.id" :raceModel="race" />
  </div>
</template>
