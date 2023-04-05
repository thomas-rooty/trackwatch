'use client'
import styles from './categories.module.css'
import { useState, useEffect } from 'react'
import { useDiscoverStore } from '@/stores/discover'
import ShowCard from '@/components/cards/ShowCard'

const PopularSeriesRecent = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setPopular = useDiscoverStore((state) => state.setPopular)
  const popular = useDiscoverStore((state) => state.popular)
  const [showAll, setShowAll] = useState(false)

  // Get first date of last year and last day of this year
  const twoYearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 2)
  )
    .toISOString()
    .slice(0, 10)

  // Call the API to get the popular movies
  useEffect(() => {
    async function getPopularMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&first_air_date.gte=${twoYearAgo}&sort_by=vote_count.desc&language=en-US&page=1&region=US`
      )
      const data = await response.json()
      setPopular(data.results)
    }

    getPopularMovies()
  }, [TMDB_API_KEY, setPopular])

  const handleShowAllClick = () => {
    setShowAll(!showAll)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Recent popular series</h1>
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
        {popular.map((show: any) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

export default PopularSeriesRecent
