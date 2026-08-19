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
  <div class="pr-card mb-4">
    <div class="pr-card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
      <h2>{{ raceModel.name }}</h2>
      <span class="pr-badge">
        <i class="fas fa-clock"></i>
        {{ startInstant }}
      </span>
    </div>
    <div class="pr-pony-grid">
      <li v-for="pony in raceModel.ponies" :key="pony.id" class="list-unstyled mb-0">
        <Pony :pony="pony" />
      </li>
    </div>
  </div>
</template>
