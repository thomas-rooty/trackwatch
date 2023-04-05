import styles from './actorcard.module.css'
import Image from 'next/legacy/image'

interface ActorProps {
  actor: {
    adult: boolean
    character: string
    credit_id: string
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string | null
  }
}

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
