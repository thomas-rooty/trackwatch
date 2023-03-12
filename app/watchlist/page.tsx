'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import { useAuthStore } from '@/stores/auth'
import SavedShowCard from '@/components/cards/SavedShowCard'
import styles from './watchlist.module.css'
import Image from 'next/legacy/image'
import Select from '@/public/icons/select.png'
import SelectActive from '@/public/icons/select_active.png'
import Trash from '@/public/icons/trash.png'
import { removeShowFromUser } from '@/utils/supabaseFunctions'

const Watchlist = () => {
  const user = useAuthStore((state) => state.user)
  const [savedShows, setSavedShows] = useState<number[]>([])
  const [loaded, setLoaded] = useState(false)
  const [selectMode, setSelectMode] = useState(false)
  const [selectedShows, setSelectedShows] = useState<number[]>([])

  // Ensure that user is loaded before rendering
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Update savedShows when user changes
  useEffect(() => {
    setSavedShows(user?.saved_shows ?? [])
  }, [user])

  // Delete shows from savedShows array
  const handleShowRemove = () => {
    setSavedShows((prev) => prev.filter((id) => !selectedShows.includes(id)))
    setSelectedShows([])
  }

  // Delete shows from user's saved_shows array in supabase
  const handleDeleteClick = async () => {
    if (selectedShows) {
      // Ask for confirmation
      const confirmation = confirm('Are you sure you want to delete these shows ?')
      if (!confirmation) {
        return
      }
      // Delete shows
      for (const show of selectedShows) {
        await removeShowFromUser(show, user?.id)
        if (handleShowRemove) {
          handleShowRemove()
        }
      }
      // Exit select mode
      setSelectMode(false)
    }
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>Favorites shows</h1>
        <div className={styles.rightSectionTitle}>
          {selectedShows.length > 0 && (
            <div className={styles.trashBtn} onClick={handleDeleteClick}>
              <Image src={Trash} alt={'Trash Icon'} width={24} height={24} />
            </div>
          )}
          <div className={styles.selectBtn}>
            {selectMode ? (
              <Image src={SelectActive} alt="Select" width={24} height={24} onClick={() => setSelectMode(false)} />
            ) : (
              <Image src={Select} alt="Select" width={24} height={24} onClick={() => setSelectMode(true)} />
            )}
          </div>
          <span className={styles.showAll}>Show all</span>
        </div>
      </div>
      {loaded && (
        <div className={styles.watchlistCardsContainer}>
          {savedShows.map((show) => (
            <SavedShowCard key={show} showId={show} selectMode={selectMode} setSelectedShows={setSelectedShows} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist
