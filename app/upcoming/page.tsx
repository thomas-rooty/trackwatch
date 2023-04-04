'use client'
import {useState, useEffect} from 'react'
import {useAuthStore} from '@/stores/auth'
import Sidebar from '@/components/sidebar/Sidebar'
import styles from './upcoming.module.css'
import SavedShowCard from "@/components/cards/SavedShowCard";

const Upcoming = () => {
  const user = useAuthStore((state) => state.user)
  const [loaded, setLoaded] = useState(false)
  const [savedShows, setSavedShows] = useState<number[]>([])
  const [savedShowsDetails, setSavedShowsDetails] = useState<any[]>([])

  // Ensure that user is loaded before rendering
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Update savedShows when user changes
  useEffect(() => {
    setSavedShows(user?.saved_shows ?? [])
  }, [user])

  // Fetch details for saved shows array
  useEffect(() => {
    const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
    for (const show of savedShows) {
      fetch(`https://api.themoviedb.org/3/tv/${show}?api_key=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          // if next_episode_to_air is null, don't add to savedShowsDetails
          if (data.next_episode_to_air) (
            setSavedShowsDetails(prev => [...prev, data])
          )
        })
    }
  }, [savedShows])

  // Ensure that user is loaded before rendering
  useEffect(() => {
    console.log(savedShowsDetails)
  }, [savedShowsDetails])

  return (
    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Shows with an upcoming episodes in the next 7 days</h1>
      </div>
      {loaded && (
        <div className={styles.watchlistCardsContainer}>
          {savedShowsDetails.map((show) => (
            <SavedShowCard key={show.id} showId={show.id} selectMode={null} setSelectedShows={undefined}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Upcoming
