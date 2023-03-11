'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import { useAuthStore } from '@/stores/auth'
import SavedShowCard from '@/components/cards/SavedShowCard'
import styles from './watchlist.module.css'

const Watchlist = () => {
  const user = useAuthStore((state) => state.user)
  const [savedShows, setSavedShows] = useState<number[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    setSavedShows(user?.saved_shows ?? [])
  }, [user])

  const handleShowRemove = (showId: number) => {
    setSavedShows((prev) => prev.filter((id) => id !== showId))
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      {loaded && (
        <div className={styles.watchlistCardsContainer}>
          {savedShows.map((show) => (
            <SavedShowCard key={show} showId={show} userId={user?.id} onRemove={() => handleShowRemove(show)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist
