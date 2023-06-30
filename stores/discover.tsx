import { create } from 'zustand'

interface DiscoverStore {
  popular: any
  setPopular: (movies: any) => void
  popularSeries: any
  setPopularSeries: (movies: any) => void
  recent: any
  setRecent: (movies: any) => void
  comedy: any
  setComedy: (movies: any) => void
}

export const useDiscoverStore = create<DiscoverStore>((set) => ({
  popular: [],
  setPopular: (movies) => set({ popular: movies }),
  popularSeries: [],
  setPopularSeries: (movies) => set({ popularSeries: movies }),
  recent: [],
  setRecent: (movies) => set({ recent: movies }),
  comedy: [],
  setComedy: (movies) => set({ comedy: movies }),
}))
