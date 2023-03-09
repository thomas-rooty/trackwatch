'use client'
import styles from './discoverlist.module.css'
import {useEffect} from "react";
import {useDiscoverStore} from "@/stores/discover";
import MovieCard from "@/components/moviecard/MovieCard";

const DiscoverList = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setMovies = useDiscoverStore(state => state.setMovies)
  const movies = useDiscoverStore(state => state.movies)

  // Call the API :
  // https://api.themoviedb.org/3/discover/movie?api_key=TMDB_API_KEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
  // And set the movies in the Discover store
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(data => {
        // Limit to 8 movies
        data.results = data.results.slice(0, 8)
        setMovies(data.results)
        console.log(data.results)
      })
  }, [TMDB_API_KEY, setMovies])

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Popular shows</h1>
        <span className={styles.showAll}>Show all</span>
      </div>
      <ul className={styles.movieList}>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <MovieCard movie={movie}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DiscoverList
