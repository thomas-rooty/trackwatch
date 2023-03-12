import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './savedshowcard.module.css'
import CheckAnimation from '@/public/icons/check.gif'
import CheckStatic from '@/public/icons/check_static.png'

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

  const [isSelected, setIsSelected] = useState(false)
  const [showAnimatedCheckIcon, setShowAnimatedCheckIcon] = useState(false)

  useEffect(() => {
    const getShowDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
      const data = await res.json()
      setShow(data)
    }
    getShowDetails()
  }, [showId])

  // Depending on selectMode, either redirect to show page or add/remove show from selectedShows array
  const handleShowClick = () => {
    if (selectMode) {
      // Add to selectedShows array
      setIsSelected((prev) => !prev)
      setShowAnimatedCheckIcon(true)
      if (!isSelected && setSelectedShows) {
        setSelectedShows((prev) => [...prev, showId])
      } else if (isSelected && setSelectedShows) {
        setSelectedShows((prev) => prev.filter((id: number) => id !== showId))
      }
      // Handle check icon animation
      setTimeout(() => {
        setShowAnimatedCheckIcon(false)
      }, 2000)
    } else {
      // Redirect to show page
      router.push(`/show?id=${show.id}`)
    }
  }

  return (
    <div className={styles.container}>
      {selectMode && (
        <div className={styles.selectBtn}>
          {isSelected && (
            showAnimatedCheckIcon ? (
              <Image src={CheckAnimation} alt={'Check Icon'} width={100} height={100} className={styles.checkIcon} />
            ) : (
              <Image src={CheckStatic} alt={'Check Icon'} width={100} height={100} className={styles.checkIcon} />
            )
          )}
        </div>
      )}
      <div className={selectMode ? styles.showCardSelect : styles.showCard} onClick={handleShowClick}>
        <Image src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} className={styles.showPoster} width={160} height={280} />
        {!selectMode ?
          <div className={styles.overlay} />
          :
          !isSelected && <div className={styles.overlayDarken}></div>
        }
        <div className={styles.showDetails}>
          <h3 className={styles.showTitle}>{show.name}</h3>
          <span className={styles.showVote}>{show.vote_count} votes</span>
        </div>
      </div>
    </div>
  )
}

export default SavedShowCard
