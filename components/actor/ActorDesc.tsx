import styles from './actor.module.css'
import { useActorStore } from '@/stores/actor'
import Image from 'next/legacy/image'

const ShowDesc = () => {
  // Get actor from store
  const actor = useActorStore((state) => state.actor)
  return (
    <div className={styles.actorDesc}>
      <h3 className={styles.actorDescTitle}>{actor.name}</h3>
      <div className={styles.actorDescContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
          width={150}
          height={225}
          className={styles.actorImage}
        />
        <p className={styles.actorDescText}>{actor.biography}</p>
      </div>
    </div>
  )
}

export default ShowDesc
