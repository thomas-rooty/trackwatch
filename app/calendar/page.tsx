'use client'
import { useState, useEffect } from 'react'
import { useUserStore } from '@/stores/user'
import Sidebar from '@/components/sidebar/Sidebar'
import styles from './calendar.module.css'
import CalendarComponent from '@/components/calendar/CalendarComponent'

const Calendar = () => {
  const user = useUserStore((state) => state.user)
  const [loaded, setLoaded] = useState(false)
  const [savedShows, setSavedShows] = useState<number[]>([])
  const [savedShowsDetails, setSavedShowsDetails] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])

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

    async function fetchShowDetails(show: number) {
      const response = await fetch(`https://api.themoviedb.org/3/tv/${show}?api_key=${TMDB_API_KEY}`)
      const data = await response.json()
      if (data.next_episode_to_air) {
        setSavedShowsDetails((prev) => [...prev, data])
      }
    }

    savedShows.forEach((show) => fetchShowDetails(show))
  }, [savedShows])

  useEffect(() => {
    // Build events array
    const events = savedShowsDetails.map((show) => {
      const { name, next_episode_to_air } = show
      const { air_date } = next_episode_to_air
      const date = new Date(air_date)
      return {
        title: name,
        date,
      }
    })
    setEvents(events)
    console.log(events)
  }, [savedShowsDetails])

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Calendar of events</h1>
      </div>
      {loaded && <CalendarComponent events={events} />}
    </div>
  )
}

export default Calendar
