import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { removeShowFromUser } from '@/utils/supabaseFunctions'
import styles from './savedshowcard.module.css'

interface SavedShowCardProps {
  showId: number
  userId: string | undefined
  onRemove?: () => void
}

const SavedShowCard = ({ showId, userId, onRemove }: SavedShowCardProps) => {
  const router = useRouter()

  const [show, setShow] = useState({
    id: 0,
    name: '',
    poster_path: '',
    vote_count: 0,
  })

  useEffect(() => {
    const getShowDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
      const data = await res.json()
      setShow(data)
    }
    getShowDetails()
  }, [showId])

  const handleShowClick = () => {
    router.push(`/show?id=${show.id}`)
  }

  const handleRemoveClick = async () => {
    // Remove the show from saved shows
    await removeShowFromUser(showId, userId)
    if (onRemove) {
      onRemove()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.removeBtn} onClick={handleRemoveClick}>
        <span className={styles.removeBtnText}>X</span>
      </div>
      <div className={styles.showCard} onClick={handleShowClick}>
        <Image src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} className={styles.showPoster} width={165} height={280} />
        <div className={styles.overlay} />
        <div className={styles.showDetails}>
          <h3 className={styles.showTitle}>{show.name}</h3>
          <span className={styles.showVote}>{show.vote_count} votes</span>
        </div>
      </div>
    </div>
  )
}

export default SavedShowCard
