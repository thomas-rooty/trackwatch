import styles from './sections.module.css'
import DiscoverPreview from "@/public/img/previews/discover.gif"
import Image from "next/legacy/image"

const Section1 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionContentLeft}>
          <h1 className={styles.title}>
            Discover new shows
          </h1>
          <p className={styles.description}>
            Discover new shows and movies by browsing through our recommendations.
          </p>
        </div>
        <div className={styles.sectionContentRight}>
          <Image src={DiscoverPreview} alt={'Discover new shows'} className={styles.previewVideo} />
        </div>
      </div>
    </div>
  )
}

export default Section1
