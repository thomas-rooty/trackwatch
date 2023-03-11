'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import { useAuthStore } from '@/stores/auth'
import SavedShowCard from '@/components/cards/SavedShowCard'
import styles from './watchlist.module.css'
import Image from 'next/legacy/image';
import Select from '@/public/icons/select.png'
import SelectActive from '@/public/icons/select_active.png'
import Trash from '@/public/icons/trash.png'
import { removeShowFromUser } from '@/utils/supabaseFunctions';

const Watchlist = () => {
  const user = useAuthStore((state) => state.user)
  const [savedShows, setSavedShows] = useState<number[]>([])
  const [loaded, setLoaded] = useState(false)
  const [selectMode, setSelectMode] = useState(false)
  const [selectedShows, setSelectedShows] = useState<number[]>([]);

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    setSavedShows(user?.saved_shows ?? [])
  }, [user])

  const handleShowRemove = () => {
    setSavedShows((prev) => prev.filter((id) => !selectedShows.includes(id)));
    setSelectedShows([]);
  }

  const handleDeleteClick = async () => {
    // Delete all shows from selectedShows array
    if (selectedShows) {
      for (const show of selectedShows) {
        await removeShowFromUser(show, user?.id)
        if (handleShowRemove) {
          handleShowRemove()
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.sectionTitleContainer}>
        <h1 className={styles.sectionTitle}>New episode soon</h1>
        <div className={styles.rightSectionTitle}>
          {selectedShows.length > 0 && (
            <div className={styles.deleteBtn} onClick={handleDeleteClick}>
              <Image src={Trash} alt={'Delete Btn'} className={styles.deleteIcon} width={24} height={24} />
            </div>
          )}
          {selectMode ? (
            <Image src={SelectActive} alt="Trash" width={24} height={24} className={styles.trashIcon} onClick={() => setSelectMode(false)} />
          ) : (
            <Image src={Select} alt="Trash" width={24} height={24} className={styles.trashIcon} onClick={() => setSelectMode(true)} />
          )}
          <span className={styles.showAll}>Show all</span>
        </div>
      </div>
      {loaded && (
        <div className={styles.watchlistCardsContainer}>
          {savedShows.map((show) => (
            <SavedShowCard
              key={show}
              showId={show}
              selectMode={selectMode}
              setSelectedShows={setSelectedShows}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist
