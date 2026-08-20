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
          <li v-if="userModel" class="nav-item">
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
        <ul v-if="userModel" class="navbar-nav">
          <li class="navbar-text">
            <span id="current-user" class="me-2">
              {{ userModel.login }}
              <span class="fa fa-star"></span>
              {{ userModel.money }}
            </span>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-link nav-link" @click="logout">
              <i class="fas fa-sign-out-alt me-1"></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../composables/UserStore'

export default {
  data() {
    const userStore = useUserStore()
    return {
      navbarCollapsed: true,
      // On « épand » les refs du store dans data() grâce à storeToRefs :
      // ce.userModel reste ainsi réactif et synchronisé avec le store.
      ...storeToRefs(userStore),
    }
  },

  methods: {
    toggleNavbar() {
      this.navbarCollapsed = !this.navbarCollapsed
    },

    logout() {
      // useUserStore() retourne toujours la même instance de store.
      useUserStore().logoutAndForget()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
