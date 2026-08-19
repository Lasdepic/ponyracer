<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">PonyRacer</RouterLink>

      <button type="button" class="navbar-toggler" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbar" :class="{ collapse: navbarCollapsed }">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/races" class="nav-link">Races</RouterLink>
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
