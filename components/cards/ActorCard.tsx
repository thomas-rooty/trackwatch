import styles from './actorcard.module.css'
import Image from 'next/legacy/image'
import { ActorProps } from '@/types/actor.interface'

const ActorCard = ({ actor }: ActorProps) => {
  return (
    <div className={styles.actorCard}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
        width={200}
        height={300}
        layout="responsive"
        className={styles.actorImage}
      />
      <div className={styles.actorInfo}>
        <h3 className={styles.actorName}>{actor.name}</h3>
        <p className={styles.actorCharacter}>{actor.character}</p>
      </div>
    </div>
  )
}

export default ActorCard
