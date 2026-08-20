import axios from 'axios'
import { ref } from 'vue'
import type { UserModel } from '../models/UserModel'

const userModel = ref<UserModel | null>(null)

export function useUserService() {
  return {
    userModel,
    async register(user: UserModel): Promise<UserModel> {
      const res = await axios.post<UserModel>(
        'https://ponyracer.ninja-squad.com/api/users',
        user,
      )
      return res.data
    },

    async authenticate(credentials: { login: string; password: string }): Promise<UserModel> {
      const res = await axios.post<UserModel>(
        'https://ponyracer.ninja-squad.com/api/users/authentication',
        credentials,
      )
      userModel.value = res.data
      return res.data
    },
  }
}