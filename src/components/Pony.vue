<template>
  <figure @click="clicked">
    <img class="border border-warning rounded mb-2 p-2" :src="ponyImageUrl" :alt="pony.name" />
    <figcaption>{{ pony.name }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'Pony',

  props: {
    pony: {
      type: Object,
      required: true,
    },
  },

  emits: ['ponySelected'],

  computed: {
    ponyImageUrl() {
      return `/images/pony-${this.pony.color.toLowerCase()}.gif`
    },
  },

  methods: {
    clicked() {
      this.$emit('ponySelected', this.pony)
    },
  },
}
</script>
