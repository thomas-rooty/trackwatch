import { create } from 'zustand'
import { ShowDetails } from '@/types/showdetails.interface'

interface SavedShowStore {
  showDetails: ShowDetails[]
  setShowDetails: (showDetails: ShowDetails[]) => void
}

export const useSavedShowsStore = create<SavedShowStore>((set) => ({
  showDetails: [],
  setShowDetails: (showDetails) => set({ showDetails }),
}))
