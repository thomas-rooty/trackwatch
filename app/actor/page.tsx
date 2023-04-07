'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useActorStore } from '@/stores/actor'
import styles from './actor.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import ActorHeader from '@/components/actor/ActorHeader'
import ActorDesc from '@/components/actor/ActorDesc'

const MovieDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get store values
  const setActor = useActorStore((state) => state.setActor)
  const isLoaded = useActorStore((state) => state.isLoaded)
  const setIsLoaded = useActorStore((state) => state.setIsLoaded)

  // Fetch actor details
  useEffect(() => {
    async function fetchActorDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&language=en-US`
      )
      return await response.json()
    }

    async function fetchHisShows() {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&language=en-US&sort_by=vote_count.desc&page=1S&append_to_response=tv_credits`
      )
      return await response.json()
    }

    async function fetchData() {
      const actorDetails = await fetchActorDetails()
      const shows = await fetchHisShows()
      setActor({
        ...actorDetails,
        shows: shows.tv_credits.cast,
      })
      setIsLoaded(true)
    }

    fetchData()
  }, [])

  return (
    isLoaded && (
      <div className={styles.container}>
        <Sidebar />
        <ActorHeader />
        <ActorDesc />
      </div>
    )
  )
}

export default MovieDetails
