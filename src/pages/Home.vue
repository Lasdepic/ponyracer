<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '../composables/UserStore'

const userStore = useUserStore()

// Extrait userModel en conservant sa réactivité
const { userModel } = storeToRefs(userStore)
</script>

<template>
  <section class="py-5">
    <div class="container text-center">
      <h1 class="display-5 mb-3">
        <i class="fas fa-horse me-2"></i>
        PonyRacer
      </h1>

      <p class="lead mb-4">Pariez sur vos poneys favoris et gagnez la course !</p>

      <Transition name="fade" mode="out-in">
        <!-- Utilisateur connecté -->
        <div v-if="userModel" key="logged-in">
          <RouterLink to="/races" class="btn btn-primary btn-lg me-2">
            <i class="fas fa-flag-checkered me-2"></i>
            Voir les courses
          </RouterLink>
        </div>

        <!-- Utilisateur non connecté -->
        <div v-else key="logged-out">
          <RouterLink to="/login" class="btn btn-primary btn-lg me-2">
            <i class="fas fa-sign-in-alt me-2"></i>
            Login
          </RouterLink>

          <RouterLink to="/register" class="btn btn-outline-primary btn-lg">
            <i class="fas fa-user-plus me-2"></i>
            S'inscrire
          </RouterLink>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
