<script setup lang="ts">
import { computed } from 'vue'
import type { RaceModel } from '../models/RaceModel'
import fromNow from '../utils/fromNow'
import Pony from './Pony.vue'

const props = defineProps<{
  raceModel: RaceModel
}>()

const startInstant = computed(() => fromNow(props.raceModel.startInstant))
</script>

<template>
  <div class="card mb-4 shadow-sm">
    <div
      class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2"
    >
      <h2 class="h5 mb-0">{{ raceModel.name }}</h2>
      <span class="badge text-bg-light">
        <i class="fas fa-clock me-1"></i>{{ startInstant }}
      </span>
    </div>
    <div class="card-body d-flex flex-wrap justify-content-center gap-2">
      <Pony v-for="pony in raceModel.ponies" :key="pony.id" :pony="pony" />
    </div>
  </div>
</template>
