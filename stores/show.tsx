import {create} from 'zustand'
import {Show} from '@/types/show.interface';

interface ShowStore {
  show: Show
  setShow: (movie: any) => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useMovieStore = create<ShowStore>((set) => ({
  show: {} as Show,
  setShow: (show) => set({show}),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({isLoaded}),
}))
