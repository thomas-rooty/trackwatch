import {create} from 'zustand'

interface DiscoverStore {
  popular: any
  setPopular: (movies: any) => void
  recent: any
  setRecent: (movies: any) => void
  comedy: any
  setComedy: (movies: any) => void
}

export const useDiscoverStore = create<DiscoverStore>((set) => ({
  popular: [],
  setPopular: (movies) => set({popular: movies}),
  recent: [],
  setRecent: (movies) => set({recent: movies}),
  comedy: [],
  setComedy: (movies) => set({comedy: movies}),
}))
