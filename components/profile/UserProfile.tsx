import styles from './userprofile.module.css'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { ButtonMain, ButtonSecondary } from '@/components/buttons/Buttons'
import { useUserStore } from '@/stores/user'
import { useSavedShowsStore } from '@/stores/savedshow'
import {
  calculateEpisodesWatched,
  calculateSeasonsWatched,
  calculateShowsWatched,
  calculateMinutesWatched,
} from '@/utils/statisticsFunctions'
import DayCounter from '@/components/profile/DayCounter'

const UserProfile = () => {
  const [loaded, setLoaded] = useState(false)
  const user = useUserStore((state) => state.user)
  const showDetails = useSavedShowsStore((state) => state.showDetails)
  const [episodesWatched, setEpisodesWatched] = useState(0)
  const [seasonsWatched, setSeasonsWatched] = useState(0)
  const [showsWatched, setShowsWatched] = useState(0)
  const [minutesWatched, setMinutesWatched] = useState(0)

  useEffect(() => {
    if (user) {
      setLoaded(true)
    }
  }, [user])

  useEffect(() => {
    if (showDetails) {
      setEpisodesWatched(calculateEpisodesWatched(showDetails))
      setSeasonsWatched(calculateSeasonsWatched(showDetails))
      setShowsWatched(calculateShowsWatched(showDetails))
      setMinutesWatched(calculateMinutesWatched(showDetails))
    }
  }, [showDetails])

  return (
    <>
      {loaded && (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Welcome {user?.name}, you've watched a total of <b>{showsWatched}</b> shows, which represents a total of{' '}
              <b>{seasonsWatched}</b> seasons and <b>{episodesWatched}</b> episodes!
            </h1>
            <h3 className={styles.subtitle}>
              Approximatively, you've accumulated a total of <b>{minutesWatched}</b> minutes screen time! Whether you're
              horrified or proud, we don't judge!
            </h3>
          </div>
          <div className={styles.counter}>
            <DayCounter minutes={minutesWatched} />
          </div>
          <div className={styles.ppSection}>
            <div className={styles.avatarUpper}>
              <p className={styles.description}>Avatar</p>
              <div>
                <Image
                  className={styles.avatar}
                  src={user?.avatar_url as string}
                  alt="Avatar"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={styles.avatarLower}>
              <div className={styles.ppUpload}>
                <ButtonSecondary>Upload</ButtonSecondary>
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Name</p>
              <div className={styles.infoInput}>
                <input type="text" value={user?.name} />
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Email</p>
              <div className={styles.infoInput}>
                <input type="email" value={user?.email} />
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Password</p>
              <div className={styles.infoInput}>
                <input type="password" value={''} />
              </div>
            </div>
          </div>
          <div className={styles.saveSection}>
            <ButtonMain>Save changes</ButtonMain>
          </div>
        </div>
      )}
    </>
  )
}

export default UserProfile
