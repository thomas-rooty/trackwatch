import styles from './showcard.module.css'
import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'
import { Show } from '@/types/show.interface'
import { useUserStore } from '@/stores/user'
import { appendShowToUser, checkIfShowIsSaved, removeShowFromUser } from '@/utils/supabaseFunctions'
import { useState, useEffect, SetStateAction } from 'react'

const ShowCard = ({ show }: { show: Show }) => {
  const router = useRouter()
  const [isSaved, setIsSaved] = useState<boolean>(false)

  // Get user from store
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    const checkSavedShow = async () => {
      const saved = await checkIfShowIsSaved(show.id, user?.id)
      setIsSaved(saved as SetStateAction<boolean>)
    }
    checkSavedShow()
  }, [show.id, user])

  // Function that redirects to /discover/[id] when a show is clicked
  const handleShowClick = () => {
    router.push(`/show?id=${show.id}`)
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
    <div className={styles.container}>
      {isSaved ? (
        <div className={styles.addBtn} onClick={handleAddClick}>
          <span className={styles.addBtnText}>Remove</span>
        </div>
      ) : (
        <div className={styles.addBtn} onClick={handleAddClick}>
          <span className={styles.addBtnText}>Add</span>
        </div>
      )}
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

export default ShowCard;
