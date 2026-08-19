<template>
  <section class="pr-hero">
    <div class="container position-relative">
      <h1><i class="fas fa-horse me-2"></i>PonyRacer</h1>
      <p class="lead mb-4">Pariez sur vos poneys favoris et gagnez la course !</p>
      <RouterLink to="/races" class="btn pr-btn-primary btn-lg">
        <i class="fas fa-flag-checkered me-2"></i>Voir les courses
      </RouterLink>
      <RouterLink to="/register" class="btn pr-btn-primary btn-lg">
        <i class="fas fa-user-plus me-2"></i>S'inscrire
      </RouterLink>
    </div>
  </section>
</template>
