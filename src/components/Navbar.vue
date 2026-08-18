<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand">PonyRacer</a>

      <button type="button" class="navbar-toggler" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbar" :class="{ collapse: navbarCollapsed }">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link">Races</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarCollapsed: true,
    }
  },

  methods: {
    toggleNavbar() {
      this.navbarCollapsed = !this.navbarCollapsed
    },
  },
}
</script>
