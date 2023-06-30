import { create } from 'zustand'

interface SearchStore {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
  searchResults: any
  setSearchResults: (results: any) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (searchQuery) => {
    set({ searchQuery })
  },
  searchResults: [],
  setSearchResults: (results) => {
    set({ searchResults: results })
  },
}))
