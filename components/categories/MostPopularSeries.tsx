'use client'
import styles from './categories.module.css'
import {useEffect} from "react";
import {useDiscoverStore} from "@/stores/discover";
import ShowCard from "@/components/cards/ShowCard";

const MostPopularSeries = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setPopularSeries = useDiscoverStore(state => state.setPopularSeries)
  const popularSeries = useDiscoverStore(state => state.popularSeries)

  // Call the API to get the popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&sort_by=vote_count.desc&language=en-US&page=1&region=US`)
      .then(response => response.json())
      .then(data => {
        // Limit to 12 movies
        data.results = data.results.slice(0, 12)
        setPopularSeries(data.results)
      })
  }, [TMDB_API_KEY, setPopularSeries])

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Most popular series of all time</h1>
        <span className={styles.showAll}>Show all</span>
      </div>
      <div className={styles.cardsContainer}>
        {popularSeries.map((show: any) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

export default MostPopularSeries
