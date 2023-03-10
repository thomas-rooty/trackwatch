"use client"
import {useEffect, useState} from 'react'
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/stores/auth";
import {supabase} from "@/utils/supabase";
import styles from './account.module.css'
import Sidebar from '@/components/sidebar/Sidebar';
import type {User} from "@/types/user.interface";

const Account = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const {user: currentUser} = useAuthStore()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data, error} = await supabase
          .from('users')
          .select('id, email, name, preferences, saved_shows')
          .eq('email', currentUser?.email)
          .single()

        if (error) throw new Error(error.message)

        setUser(data)
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
    <div className={styles.container}>
      <Sidebar/>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Preferences: {user.preferences}</p>
          <p>Saved Shows: {user.saved_shows}</p>
        </div>
      )}
    </div>
  )
}

export default Account
