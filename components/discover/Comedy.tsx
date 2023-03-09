'use client'
import styles from './category.module.css'
import {useEffect} from "react";
import {useDiscoverStore} from "@/stores/discover";
import MovieCard from "@/components/moviecard/MovieCard";

const Comedy = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setComedy = useDiscoverStore(state => state.setComedy)
  const comedy = useDiscoverStore(state => state.comedy)

  // Genres
  // 35: Comedy
  // 10751: Family
  const genres = '35, 10751'

  // Call the API to get the popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => {
        // Limit to 8 movies
        data.results = data.results.slice(0, 8)
        setComedy(data.results)
      })
  }, [TMDB_API_KEY, setComedy])

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Comedy with family shows</h1>
        <span className={styles.showAll}>Show all</span>
      </div>
      <ul className={styles.movieList}>
        {comedy.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard movie={movie}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comedy
