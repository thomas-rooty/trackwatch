import styles from './show.module.css'
import { useShowStore } from '@/stores/show'
import { SetStateAction, useEffect, useState } from 'react'
import { appendShowToUser, checkIfShowIsSaved, removeShowFromUser } from '@/utils/supabaseFunctions'
import { useUserStore } from '@/stores/user'
import { useSearchParams } from 'next/navigation'

const ShowHeader = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  // Get user from store
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    const checkSavedShow = async () => {
      const saved = await checkIfShowIsSaved(show.id, user?.id)
      setIsSaved(saved as SetStateAction<boolean>)
    }
    checkSavedShow()
  }, [id, user])

  // Get show from store
  const show = useShowStore((state) => state.show)

  // Convert release date to year
  const releaseYear = show.first_air_date.split('-')[0]

  // Round vote average to nearest 0.01
  const voteAverage = Math.round(show.vote_average * 100) / 100

  // Style the container with the poster path
  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original${show.backdrop_path})`,
  }

  // Function that appends/removes show id to/from user's saved_shows array
  const handleAddClick = async () => {
    if (isSaved) {
      // Remove the show from saved shows
      await removeShowFromUser(show.id, user?.id)
      setIsSaved(false)
    } else {
      // Add the show to saved shows
      await appendShowToUser(show.id, user?.id)
      setIsSaved(true)
    }
  }

  return (
    <div className={styles.container} style={{ ...bgStyle }}>
      {isSaved ? (
        <div className={styles.addBtn} onClick={handleAddClick}>
          <span className={styles.addBtnText}>Remove from watchlist</span>
        </div>
      ) : (
        <div className={styles.addBtn} onClick={handleAddClick}>
          <span className={styles.addBtnText}>Add</span>
        </div>
      )}
      <h1 className={styles.showTitle}>
        {show.name} ({releaseYear})
      </h1>
      <span className={styles.genres}>
        {show.genres.map((genre, index) => (
          <span key={genre.id}>
            {genre.name}
            {index !== show.genres.length - 1 && ', '}
          </span>
        ))}
      </span>
      <span className={styles.inProduction}>{show.in_production ? 'In production' : 'Ended'}</span>
      <span className={styles.voteAverage}>SCORE : {voteAverage}/10</span>
    </div>
  )
}

export default ShowHeader
