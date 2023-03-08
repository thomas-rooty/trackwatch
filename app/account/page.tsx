"use client"
import {useEffect, useState} from 'react'
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/stores/auth";
import {supabase} from "@/utils/supabase";

interface User {
  id: string
  email: string
  password: string
}

const Account = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const {user: currentUser} = useAuthStore()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data, error} = await supabase
          .from('users')
          .select('id, email, password')
          .eq('email', currentUser?.email)
          .single()

        if (error) throw new Error(error.message)

        setUser(data)

        // Check if we have a session
        const {
          data: { session },
        } = await supabase.auth.getSession()

        console.log(session)
      } catch (error: any) {
        console.error(error.message)

        // If there was an error fetching the user's information, we should redirect them back to the login page.
        router.push('/login')
      }
    }

    if (currentUser) {
      fetchUser()
    }
  }, [currentUser, router])

  return (
    <div>
      <h1>Account</h1>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  )
}

export default Account
