<script setup lang="ts">
import type { RaceModel } from '../models/RaceModel'
import Race from '../components/Race.vue'
import { useRaceService } from '../composables/RaceService'

const raceService = useRaceService()

const races: Array<RaceModel> = await raceService.list()
</script>

<template>
  <div>
    <h1 class="mb-4 border border-dark text-center text-warning bg-dark rounded">
      Course de Poney
    </h1>

    <Race v-for="race in races" :key="race.id" :raceModel="race" />
  </div>
</template>
