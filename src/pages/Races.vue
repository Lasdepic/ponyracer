<script setup lang="ts">
import type { RaceModel } from '../models/RaceModel'
import Race from '../components/Race.vue'
import { useRaceService } from '../composables/RaceService'

const raceService = useRaceService()

const races: Array<RaceModel> = await raceService.list()
</script>

<template>
  <div class="pr-races-container px-3 px-md-4 py-4">
    <div class="pr-races-header">
      <h1>
        <i class="fas fa-flag-checkered me-2"></i>Courses de Poney
      </h1>
    </div>

    <Race v-for="race in races" :key="race.id" :raceModel="race" />
  </div>
</template>
