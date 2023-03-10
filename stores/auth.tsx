import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {supabase} from "@/utils/supabase";

type User = {
  id?: string
  name?: string
  email?: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User | null) => void
  signUp: (name: string, email: string, password: string) => Promise<void>
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
      signUp: async (name, email, password) => {
        const {data, error} = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) throw new Error(error.message)

        try {
          // Store user in database given its input
          const {data, error} = await supabase
            .from('users')
            .insert({name, email})
            .single()

          if (error) throw new Error(error.message)
        } catch (error: any) {
          alert(error.message)
        } finally {
          // Login user and redirect to account page
          await get().signIn(email, password)
          window.location.href = '/account'
        }
      },
      signIn: async (email, password) => {
        const { data: user, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw new Error(error.message);
        }

        // Récupérer l'utilisateur en utilisant son email
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*')
          .eq('email', email)
          .single();

        if (usersError) {
          throw new Error(usersError.message);
        }

        set({ user: users });

        // Rediriger vers la page de compte
        window.location.href = '/account';
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
