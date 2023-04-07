import styles from './show.module.css'
import { useShowStore } from '@/stores/show'
import Image from 'next/legacy/image'
import Trailer from '@/public/icons/trailer.svg'

const ShowTrailer = () => {
  const show = useShowStore((state) => state.show)
  return (
    <>
      {show?.trailer && (
        <div className={styles.trailerContainer}>
          <h3 className={styles.sectionTitle}>
            <Image src={Trailer} alt="Trailer" width={24} height={24} />
            <span className={styles.title}>Trailer</span>
          </h3>
          <div className={styles.trailerWrapper}>
            <iframe
              className={styles.trailer}
              src={`https://www.youtube.com/embed/${show?.trailer}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default ShowTrailer
