<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <i class="fas fa-horse me-2"></i>PonyRacer
      </RouterLink>

      <button
        type="button"
        class="navbar-toggler"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbar" :class="{ collapse: navbarCollapsed }" class="navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">
              <i class="fas fa-home me-1"></i>Accueil
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/races" class="nav-link">
              <i class="fas fa-flag-checkered me-1"></i>Courses
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link">
              <i class="fas fa-flag-checkered me-1"></i>Register
            </RouterLink>
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
