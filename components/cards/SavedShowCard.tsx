import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './savedshowcard.module.css'
import Selected from '@/public/icons/selected.png'
import SelectedActive from '@/public/icons/selected_active.png'

interface SavedShowCardProps {
  showId: number
  selectMode: boolean
  setSelectedShows?: (shows: (prev: any) => any[]) => void
}

const SavedShowCard = ({ showId, selectMode, setSelectedShows }: SavedShowCardProps) => {
  const router = useRouter()

  const [show, setShow] = useState({
    id: 0,
    name: '',
    poster_path: '',
    vote_count: 0,
  })

  const [isSelected, setIsSelected] = useState(false);

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

  const handleRemoveClick = () => {
    setIsSelected((prev) => !prev);
    if (!isSelected && setSelectedShows) {
      setSelectedShows((prev) => [...prev, showId]);
    } else if (isSelected && setSelectedShows) {
      setSelectedShows((prev) => prev.filter((id: number) => id !== showId))
    }
  }

  return (
    <div className={styles.container}>
      {selectMode && (
        <div className={styles.removeBtn} onClick={handleRemoveClick}>
          <Image src={isSelected ? SelectedActive : Selected} alt={'Select Btn'} className={styles.selectedBtn} width={30} height={30} />
        </div>
      )}
      <div className={styles.showCard} onClick={handleShowClick}>
        <Image src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} className={styles.showPoster} width={160} height={280} />
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
