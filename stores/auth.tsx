import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {supabase} from "@/utils/supabase";

type User = {
  id: string
  email?: string
  password?: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User | null) => void
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoaded: boolean
}

export const useAuthStore = create<AuthStore>()(
  persist((set, get) => ({
      user: null,
      setUser: (user) => {
        set(() => ({user}))
        localStorage.setItem('user', JSON.stringify(user)) // Save user to local storage
      },
      signUp: async (email, password) => {
        const {data, error} = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw new Error(error.message)

        try {
          const {data, error} = await supabase
            .from('users')
            .insert({email, password})
            .single()

          if (error) throw new Error(error.message)
        } catch (error: any) {
          alert(error.message)
        }
        set({user: data?.user})

        // Redirect to account page
        window.location.href = '/login'
      },
      signIn: async (email, password) => {
        const {data, error} = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw new Error(error.message)
        set({user: data.user})

        // Redirect to account page
        window.location.href = '/account'
      },
      signOut: async () => {
        set({user: null})
        localStorage.removeItem('auth-store') // Remove user from local storage
        await supabase.auth.signOut()

        // Redirect to home page
        window.location.href = '/login'
      },
      isLoaded: false,
    }),
    {
      name: 'auth-store', // Name the store (optional)
    }
  )
);
