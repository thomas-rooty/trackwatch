import {create} from 'zustand'

interface DiscoverStore {
  movies: any
  setMovies: (movies: any) => void
}

export const useDiscoverStore = create<DiscoverStore>((set) => ({
  movies: [],
  setMovies: (movies) => set(() => ({movies})),
}))
