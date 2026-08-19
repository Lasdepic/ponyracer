<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserService } from '../composables/UserService'
import Alert from '../components/Alert.vue'
import type { UserModel } from '../models/UserModel'

const router = useRouter()
const userService = useUserService()

const userModel = reactive<UserModel>({
  login: '',
  password: '',
  birthYear: new Date().getFullYear() - 18,
})

const errors = computed(() => {
  const userErrors: Partial<Record<keyof UserModel, true>> = {}

  if (!userModel.login) {
    userErrors.login = true
  }

  if (!userModel.password) {
    userErrors.password = true
  }

  if (!userModel.birthYear) {
    userErrors.birthYear = true
  }

  return userErrors
})

const dirty = reactive<Record<keyof UserModel, boolean>>({
  login: false,
  password: false,
  birthYear: false,
})

const registrationFailed = ref(false)

async function register() {
  try {
    await userService.register(userModel)
    await router.push('/')
  } catch {
    registrationFailed.value = true
  }
}
</script>

<template>
  <div class="pr-races-container px-3 px-md-4 py-4">
    <div class="pr-races-header">
      <h1>
        <i class="fas fa-user-plus me-2"></i>Inscription
      </h1>
    </div>

    <div class="pr-card">
      <div class="pr-card-header">
        <h2>Créez votre compte</h2>
      </div>

      <form class="p-4" @submit.prevent="register">
        <div class="mb-3">
          <label for="login" class="form-label" :class="{ 'text-danger': errors.login && dirty.login }">
            <i class="fas fa-user me-1"></i>Login
          </label>

          <input
            id="login"
            name="login"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.login && dirty.login }"
            v-model="userModel.login"
            @input.once="dirty.login = true"
          />

          <div v-if="errors.login && dirty.login" id="login-error" class="invalid-feedback d-block">
            The login is required
          </div>
        </div>

        <div class="mb-3">
          <label
            for="password"
            class="form-label"
            :class="{ 'text-danger': errors.password && dirty.password }"
          >
            <i class="fas fa-lock me-1"></i>Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password && dirty.password }"
            v-model="userModel.password"
            @input.once="dirty.password = true"
          />

          <div
            v-if="errors.password && dirty.password"
            id="password-error"
            class="invalid-feedback d-block"
          >
            The password is required
          </div>
        </div>

        <div class="mb-3">
          <label
            for="birthYear"
            class="form-label"
            :class="{ 'text-danger': errors.birthYear && dirty.birthYear }"
          >
            <i class="fas fa-birthday-cake me-1"></i>Birth year
          </label>

          <input
            id="birthYear"
            name="birthYear"
            type="number"
            class="form-control"
            :class="{ 'is-invalid': errors.birthYear && dirty.birthYear }"
            v-model.number="userModel.birthYear"
            @input.once="dirty.birthYear = true"
          />

          <div
            v-if="errors.birthYear && dirty.birthYear"
            id="birth-year-error"
            class="invalid-feedback d-block"
          >
            The birth year is required
          </div>
        </div>

        <Alert v-if="registrationFailed" variant="danger" dismissible @dismissed="registrationFailed = false">
          Try again with another login.
        </Alert>

        <button
          type="submit"
          class="btn pr-btn-primary w-100"
          :disabled="Object.keys(errors).length > 0"
        >
          <i class="fas fa-paper-plane me-2"></i>Let's go!
        </button>
      </form>
    </div>
  </div>
</template>
