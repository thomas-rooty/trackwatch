'use client'
import styles from './account.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import UserProfile from '@/components/profile/UserProfile'

const Account = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <UserProfile />
    </div>
  )
}

export default Account
