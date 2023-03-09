import {create} from 'zustand'
import {Season} from '@/types/season.interface';

interface SeasonStore {
  seasonDetails: Season
  setSeasonDetails: (seasonDetails: Season) => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useSeasonStore = create<SeasonStore>((set) => ({
  seasonDetails: {} as Season,
  setSeasonDetails: (seasonDetails) => set({seasonDetails}),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({isLoaded}),
}))
