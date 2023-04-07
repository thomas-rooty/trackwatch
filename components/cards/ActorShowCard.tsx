import styles from './actorcard.module.css'
import Image from 'next/legacy/image'
import { ActorShowsProps } from '@/types/actorshows.interface'

const ActorShowCard = ({ show }: ActorShowsProps) => {
  return (
    <div className={styles.actorCard}>
      {show.poster_path === null ? (
        <Image
          src="/img/no-image-found.png"
          alt={show.name}
          width={200}
          height={300}
          layout="responsive"
          className={styles.actorImage}
        />
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={show.name}
          width={200}
          height={300}
          layout="responsive"
          className={styles.actorImage}
        />
      )}
      <div className={styles.actorInfo}>
        <h3 className={styles.actorName}>{show.name}</h3>
        <p className={styles.actorCharacter}>{show.character}</p>
      </div>
    </div>
  )
}

export default ActorShowCard
