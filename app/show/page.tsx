'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useShowStore } from '@/stores/show'
import styles from './show.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import ShowHeader from '@/components/show/ShowHeader'
import ShowDesc from '@/components/show/ShowDesc'
import ShowEpisodes from '@/components/show/ShowEpisodes'
import ShowTrailer from '@/components/show/ShowTrailer'
import ShowCasting from '@/components/show/ShowCasting'

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
    async function fetchDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`
      )
      setSelectedSeason(1)
      return await response.json()
    }

    async function fetchCasting() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
      )
      return await response.json()
    }

    async function fetchTrailer() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      )
      return await response.json()
    }

    async function fetchData() {
      const details = await fetchDetails()
      const casting = await fetchCasting()
      const trailer = await fetchTrailer()
      setShow({
        ...details,
        cast: casting.cast,
        trailer: trailer.results[0]?.key,
      })
      setIsLoaded(true)
    }

    fetchData()
  }, [TMDB_API_KEY, id, setIsLoaded, setShow])

  return (
    isLoaded && (
      <div className={styles.container}>
        <Sidebar />
        <ShowHeader />
        <ShowDesc />
        <ShowEpisodes />
        <ShowTrailer />
        <ShowCasting />
      </div>
    )
  )
}

export default MovieDetails
