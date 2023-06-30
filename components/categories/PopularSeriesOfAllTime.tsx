'use client'
import styles from './categories.module.css'
import { useEffect, useState } from 'react'
import { useDiscoverStore } from '@/stores/discover'
import ShowCard from '@/components/cards/ShowCard'

const PopularSeriesOfAllTime = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setPopularSeries = useDiscoverStore((state) => state.setPopularSeries)
  const popularSeries = useDiscoverStore((state) => state.popularSeries)
  const [showAll, setShowAll] = useState(false)

  // Call the API to get the popular movies
  useEffect(() => {
    async function getPopularSeries() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&sort_by=vote_count.desc&language=en-US&page=1&region=US`
      )
      const data = await response.json()
      setPopularSeries(data.results)
    }

    getPopularSeries()
  }, [TMDB_API_KEY, setPopularSeries])

  const handleShowAllClick = () => {
    setShowAll(!showAll)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Most popular series of all time</h1>
        <span className={`${styles.showAll} ${showAll ? styles.active : ''}`} onClick={handleShowAllClick}>
          {showAll ? 'Show less' : 'Show all'}
        </span>
      </div>
      <div className={`${styles.cardsContainer} ${showAll ? styles.active : ''}`}>
        {popularSeries.map((show: any) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

export default PopularSeriesOfAllTime
