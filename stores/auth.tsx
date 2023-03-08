import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {supabase} from "@/utils/supabase";
import {Session} from "@supabase/gotrue-js";

type User = {
  id: string
  email?: string
  password?: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User | null) => void
  getSession: () => Promise<{ session: Session; } | { session: null; } | undefined>
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
      getSession: async () => {
        try {
          const {data, error} = await supabase.auth.getSession()
          console.log(data)
          return data
        } catch (error: any) {
          console.log('Error fetching session:', error.message)
          set({user: null})
        }
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
      },
      signIn: async (email, password) => {
        const {data, error} = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw new Error(error.message)

        set({user: data.user})
      },
      signOut: async () => {

        set({user: null})

        localStorage.removeItem('auth-store') // Remove user from local storage

        await supabase.auth.signOut()

        // Redirect to home page
        window.location.href = '/'
      },
      isLoaded: false,
    }),
    {
      name: 'auth-store', // Name the store (optional)
    }
  )
);

export const initAuthStore = (): AuthStore => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  setUser: () => null,
  getSession: async () => void 0,
  signUp: async () => void 0,
  signIn: async () => void 0,
  signOut: async () => void 0,
  isLoaded: true // Set isLoaded to true once the user's authentication status has been loaded from storage
})
