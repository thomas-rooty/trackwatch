import {create} from 'zustand'

interface MovieStore {
  movie: any
  setMovie: (movie: any) => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useMovieStore = create<MovieStore>((set) => ({
  movie: {},
  setMovie: (movie) => set({movie}),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({isLoaded}),
}))
