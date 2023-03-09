'use client'
import styles from './category.module.css'
import {useEffect} from "react";
import {useDiscoverStore} from "@/stores/discover";
import MovieCard from "@/components/cards/MovieCard";

const NewSoon = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setRecent = useDiscoverStore(state => state.setRecent)
  const recent = useDiscoverStore(state => state.recent)

  // Get current date with 0 padding
  const today = new Date().toISOString().slice(0, 10);
  const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  // Call the API to get the popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&air_date.gte=${today}&air_date.lte=${nextWeek}&sort_by=vote_count.desc&with_original_language=en`)
      .then(response => response.json())
      .then(data => {
        // Limit to 8 movies
        data.results = data.results.slice(0, 8)
        setRecent(data.results)
      })
  }, [TMDB_API_KEY, nextWeek, setRecent, today])

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>New episode soon</h1>
        <span className={styles.showAll}>Show all</span>
      </div>
      <ul className={styles.movieList}>
        {recent.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard movie={movie}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewSoon