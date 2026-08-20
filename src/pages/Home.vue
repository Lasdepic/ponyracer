<script setup lang="ts">
import { useUserService } from '../composables/UserService'

const { userModel } = useUserService()
</script>

<template>
  <section class="py-5">
    <div class="container text-center">
      <h1 class="display-5 mb-3">
        <i class="fas fa-horse me-2"></i>PonyRacer
      </h1>
      <p class="lead mb-4">Pariez sur vos poneys favoris et gagnez la course !</p>
      <template v-if="userModel">
        <RouterLink to="/races" class="btn btn-primary btn-lg me-2">
          <i class="fas fa-flag-checkered me-2"></i>Voir les courses
        </RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/login" class="btn btn-primary btn-lg me-2">
          <i class="fas fa-sign-in-alt me-2"></i>Login
        </RouterLink>
        <RouterLink to="/register" class="btn btn-outline-primary btn-lg">
          <i class="fas fa-user-plus me-2"></i>S'inscrire
        </RouterLink>
      </template>
    </div>
  </section>
</template>