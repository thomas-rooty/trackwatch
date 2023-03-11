import { create } from 'zustand'
import { ShowDetails } from '@/types/showdetails.interface'

interface ShowDetailsStore {
  showDetails: ShowDetails
  setShowDetails: (showDetails: ShowDetails) => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useShowDetailsStore = create<ShowDetailsStore>((set) => ({
  showDetails: {} as ShowDetails,
  setShowDetails: (showDetails) => set({ showDetails }),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
}))
