<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import type { RaceModel } from '../models/RaceModel'
import fromNow from '../utils/fromNow'
import Pony from './Pony.vue'

export default defineComponent({
  components: {
    Pony,
  },

  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true,
    },
  },

  setup(props) {
    const startInstant = computed(() => fromNow(props.raceModel.startInstant))

    return {
      startInstant,
    }
  },
})
</script>

<template>
  <div class="border border-dark mb-3 p-2">
    <h2 class="mb-2 text-dark fw-bold text-center fs-1">
      {{ raceModel.name }}
    </h2>

    <p class="bg-secondary rounded text-white text-center p-1">{{ startInstant }}</p>

    <div class="p-2 mt-4">
      <ul class="d-flex justify-content-between list-unstyled fw-bold mb-4">
        <li v-for="pony in raceModel.ponies" :key="pony.id" class="mb-4 text-center">
          <Pony :pony="pony" />
        </li>
      </ul>
    </div>
  </div>
</template>
