import { create } from 'zustand'
import { ActorDetailsProps } from '@/types/actordetails.interface'

interface ActorStore {
  actor: ActorDetailsProps
  setActor: (actor: ActorDetailsProps) => void
  isLoaded: boolean
  setIsLoaded: (loaded: boolean) => void
}

export const useActorStore = create<ActorStore>((set) => ({
  actor: {} as ActorDetailsProps,
  setActor: (actor) => set({ actor }),
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded })
}))
