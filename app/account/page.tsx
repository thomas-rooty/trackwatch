'use client'
import {useEffect, useState} from 'react'
import type {User} from '@/types/user.interface'
import {useRouter} from 'next/navigation'
import {useAuthStore} from '@/stores/auth'
import {supabase} from '@/utils/supabase'
import styles from './account.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Image from "next/legacy/image";

const Account = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const {user: currentUser} = useAuthStore()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data: user, error} = await supabase.from('users').select('*').eq('email', currentUser?.email).single()

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
      <Sidebar/>
      {user?.avatar_url && (
        <Image src={user.avatar_url} alt="Avatar" width={100} height={100}/>
      )}
    </div>
  )
}

export default Account
