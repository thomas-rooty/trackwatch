'use client'
import { useEffect } from 'react'
import { useSavedShowsStore } from '@/stores/savedshow'
import { useUserStore } from '@/stores/user'
import styles from './account.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import UserProfile from '@/components/profile/UserProfile'

const Account = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get values from store
  const showDetails = useSavedShowsStore((state) => state.showDetails)
  const setShowDetails = useSavedShowsStore((state) => state.setShowDetails)
  const user = useUserStore((state) => state.user)
  const saved_shows = user?.saved_shows

  // Call the API to get each show details
  useEffect(() => {
    async function getShowDetails() {
      if (saved_shows) {
        const showDetails = await Promise.all(
          saved_shows.map(async (show) => {
            const res = await fetch(
              `https://api.themoviedb.org/3/tv/${show}?api_key=${TMDB_API_KEY}&language=en-US`
            )
            return await res.json()
          })
        )
        setShowDetails(showDetails)
      }
    }

    getShowDetails()
  }, [saved_shows])

  return (
    <div className={styles.container}>
      <Sidebar />
      <UserProfile />
    </div>
  )
}

export default Account
