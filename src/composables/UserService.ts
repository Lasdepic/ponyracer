import axios from 'axios'
import type { UserModel } from '../models/UserModel'

export function useUserService() {
  return {
    async register(userModel: UserModel): Promise<UserModel> {
      const res = await axios.post<UserModel>(
        'https://ponyracer.ninja-squad.com/api/users',
        userModel,
      )
      return res.data
    },
  }
}
