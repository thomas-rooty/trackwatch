import { create } from 'zustand'
import { SearchResult } from '@/types/search.interface'

interface SearchStore {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
  searchResults: SearchResult
  setSearchResults: (searchResults: SearchResult) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (searchQuery) => {
    set({ searchQuery })
  },
  searchResults: { page: 0, total_pages: 0, total_results: 0, results: [] },
  setSearchResults: (searchResults) => {
    console.log(searchResults)
    set({ searchResults })
  },
}))
