import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserModel } from '../models/UserModel'

function retrieveUser(): UserModel | null {
  const userAsString = window.localStorage.getItem('rememberMe')
  return userAsString ? JSON.parse(userAsString) : null
}

// defineStore('user', () => { ... }) : on crée un store Pinia nommé « user »
// avec la syntaxe « setup store » (comme un composable, mais géré par Pinia).
//
// Ce que retourne le setup est interprété par Pinia ainsi :
//  - les ref()         -> l'ÉTAT (state) du store
//  - les computed()    -> des getters (pas de getter ici)
//  - les fonctions     -> des actions
//
// L'état est alors partagé et réactif dans toute l'application, et visible
// dans les Devtools (onglet Pinia).
export const useUserStore = defineStore('user', () => {
  // State : l'utilisateur connecté, initialisé depuis le localStorage.
  const userModel = ref<UserModel | null>(retrieveUser())

  // Fonction interne (pas une action) : synchronise l'état ET le localStorage.
  function storeLoggedInUser(user: UserModel): void {
    userModel.value = user
    window.localStorage.setItem('rememberMe', JSON.stringify(user))
  }

  // Action : inscrit un utilisateur via l'API puis le connecte.
  async function register(user: UserModel): Promise<UserModel> {
    const response = await axios.post<UserModel>(
      'https://ponyracer.ninja-squad.com/api/users',
      user,
    )
    storeLoggedInUser(response.data)
    return response.data
  }

  // Action : authentifie un utilisateur via l'API puis le connecte.
  async function authenticate(credentials: { login: string; password: string }): Promise<UserModel> {
    const response = await axios.post<UserModel>(
      'https://ponyracer.ninja-squad.com/api/users/authentication',
      credentials,
    )
    storeLoggedInUser(response.data)
    return response.data
  }

  // Action : déconnecte l'utilisateur (état + localStorage).
  function logoutAndForget(): void {
    userModel.value = null
    window.localStorage.removeItem('rememberMe')
  }

  // On expose le state et les actions au reste de l'application.
  return { userModel, register, authenticate, logoutAndForget }
})