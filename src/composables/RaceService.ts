import axios from 'axios'
import type { RaceModel } from '../models/RaceModel'

export function useRaceService() {
  return {
    async list(): Promise<Array<RaceModel>> {
      const res = await axios.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races', {
        params: {
          status: 'PENDING',
        },
      })
      return res.data
    },
  }
}
