import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from '@/utils/supabase'
import type { User } from '@/types/user.interface'

interface AuthStore {
  user: User | null
  setUser: (user: User | null) => void
  signUp: (name: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => {
        set(() => ({ user }))
      },
      signUp: async (name, email, password) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw new Error(error.message)

        try {
          // Store user in database given its input
          const { data, error } = await supabase.from('users').insert({ name, email }).single()

          if (error) throw new Error(error.message)
        } catch (error: any) {
          alert(error.message)
        } finally {
          // Alert user that they need to confirm their email
          alert('Please confirm your email address by clicking the link we sent you.')
          window.location.href = '/login'
        }
      },
      signIn: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          throw new Error(error.message)
        }

        // Récupérer l'utilisateur en utilisant son email
        const { data: users, error: usersError } = await supabase.from('users').select('*').eq('email', email).single()

        if (usersError) {
          throw new Error(usersError.message)
        }

        set({ user: users })

        // Rediriger vers la page de compte
        window.location.href = '/discover'
      },
      signOut: async () => {
        set({ user: null })
        localStorage.removeItem('auth-store') // Remove user from local storage
        await supabase.auth.signOut()

        // Redirect to home page
        window.location.href = '/login'
      },
      isLoaded: false,
      setIsLoaded: (isLoaded) => set({ isLoaded }),
    }),
    {
      name: 'auth-store', // Name the store (optional)
    }
  )
)
