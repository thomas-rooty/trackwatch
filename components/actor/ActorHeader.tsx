import styles from './actor.module.css'
import { useActorStore } from '@/stores/actor'

const ActorHeader = () => {
  // Get actor from store
  const actor = useActorStore((state) => state.actor)
  return (
    <div className={styles.container}>
      <h1 className={styles.actorTitle}>{actor.name}</h1>
      <span className={styles.birthday}>{actor.birthday}</span>
      <span className={styles.voteAverage}>POPULARITY : {actor.popularity}</span>
    </div>
  )
}

export default ActorHeader
