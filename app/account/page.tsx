'use client'
import { useEffect, useState } from 'react'
import type { User } from '@/types/user.interface'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/stores/user'
import { supabase } from '@/utils/supabase'
import styles from './account.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import UserProfile from '@/components/profile/UserProfile'

const Account = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const { user: currentUser } = useUserStore()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: user, error } = await supabase.from('users').select('*').eq('email', currentUser?.email).single()

        if (error) throw new Error(error.message)

        setUser(user)
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
      <Sidebar />
      {user && <UserProfile user={user} />}
    </div>
  )
}

export default Account
