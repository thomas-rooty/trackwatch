import styles from './sections.module.css'
import WatchlistPreview from '@/public/img/previews/watchlist.gif'
import Image from 'next/legacy/image'

const Section1 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentLeft}>
          <Image src={WatchlistPreview} alt={'Discover new shows'} className={styles.previewVideo} />
        </div>
        <div className={styles.sectionContentRight}>
          <h1 className={styles.title}>Track your shows and their episodes</h1>
          <p className={styles.description}>
            Add shows to your watchlist and track their episodes to never miss an episode again.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section1
