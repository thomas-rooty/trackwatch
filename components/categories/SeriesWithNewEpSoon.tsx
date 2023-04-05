'use client'
import styles from './categories.module.css'
import { useEffect, useState } from 'react'
import { useDiscoverStore } from '@/stores/discover'
import ShowCard from '@/components/cards/ShowCard'

const SeriesWithNewEpSoon = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setRecent = useDiscoverStore((state) => state.setRecent)
  const recent = useDiscoverStore((state) => state.recent)
  const [showAll, setShowAll] = useState(false)

  // Get current date with 0 padding
  const today = new Date().toISOString().slice(0, 10)
  const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)

  // Call the API to get the popular movies
  useEffect(() => {
    async function getRecentMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&air_date.gte=${today}&air_date.lte=${nextWeek}&sort_by=vote_count.desc&with_original_language=en`
      )
      const data = await response.json()
      setRecent(data.results)
    }

    getRecentMovies()
  }, [TMDB_API_KEY, nextWeek, setRecent, today])

  const handleShowAllClick = () => {
    setShowAll(!showAll)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>New episode soon</h1>
        <span
          className={`${styles.showAll} ${showAll ? styles.active : ''}`}
          onClick={handleShowAllClick}
        >
          {showAll ? 'Show less' : 'Show all'}
        </span>
      </div>
      <div
        className={`${styles.cardsContainer} ${showAll ? styles.active : ''}`}
      >
        {recent.map((show: any) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

export default SeriesWithNewEpSoon
