import {create} from 'zustand'
import {Show} from '@/types/show.interface';

interface ShowStore {
  show: Show
  setShow: (movie: any) => void
  selectedSeason: number
  setSelectedSeason: (selectedSeason: number) => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useShowStore = create<ShowStore>((set) => ({
  show: {} as Show,
  setShow: (show) => set({show}),
  selectedSeason: 1,
  setSelectedSeason: (selectedSeason) => {
    set({selectedSeason})
    console.log(selectedSeason)
  },
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({isLoaded}),
}))
