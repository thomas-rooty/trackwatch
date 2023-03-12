'use client'
import styles from './categories.module.css'
import {useEffect} from "react";
import {useDiscoverStore} from "@/stores/discover";
import ShowCard from "@/components/cards/ShowCard";

const PopularSeries = () => {
  // Get NEXT_PUBLIC_TMDB_API_KEY from .env.local
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get the movies from the Discover store
  const setPopular = useDiscoverStore(state => state.setPopular)
  const popular = useDiscoverStore(state => state.popular)

  // Get first date of last year and last day of this year
  const twoYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 2)).toISOString().slice(0, 10);

  // Call the API to get the popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&first_air_date.gte=${twoYearAgo}&sort_by=vote_count.desc&language=en-US&page=1&region=US`)
      .then(response => response.json())
      .then(data => {
        // Limit to 8 movies
        data.results = data.results.slice(0, 8)
        setPopular(data.results)
      })
  }, [TMDB_API_KEY, setPopular])

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Recent popular series</h1>
        <span className={styles.showAll}>Show all</span>
      </div>
      <ul className={styles.showList}>
        {popular.map((show: any) => (
          <li key={show.id}>
            <ShowCard show={show}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularSeries
