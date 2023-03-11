'use client'
import styles from './show.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useShowStore } from '@/stores/show'
import ShowHeader from '@/components/show/ShowHeader'
import ShowDesc from '@/components/show/ShowDesc'
import ShowEpisodes from '@/components/show/ShowEpisodes'

const MovieDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get store values
  const setShow = useShowStore((state) => state.setShow)
  const setSelectedSeason = useShowStore((state) => state.setSelectedSeason)
  const isLoaded = useShowStore((state) => state.isLoaded)
  const setIsLoaded = useShowStore((state) => state.setIsLoaded)

  // fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data)
        console.log(data)
        setIsLoaded(true)
      })
    // Set default season to 1, otherwise it will get the previous selected season from another show
    setSelectedSeason(1)
  }, [TMDB_API_KEY, id, setIsLoaded, setShow])

  return (
    isLoaded && (
      <div className={styles.container}>
        <Sidebar />
        <ShowHeader />
        <ShowDesc />
        <ShowEpisodes />
      </div>
    )
  )
}

export default MovieDetails;
