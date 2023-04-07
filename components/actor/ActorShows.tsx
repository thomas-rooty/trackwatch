import { useActorStore } from '@/stores/actor'
import styles from './actor.module.css'
import ActorShowCard from '@/components/cards/ActorShowCard'
import Image from 'next/legacy/image'
import Trailer from '@/public/icons/trailer.svg'
import Link from 'next/link'

const ShowCasting = () => {
  const actor = useActorStore((state) => state.actor)
  const actorshows = actor.shows

  return (
    <div className={styles.castingContainer}>
      <h3 className={styles.sectionTitle}>
        <Image src={Trailer} alt="Filmography" width={24} height={24} />
        <span className={styles.title}>Filmography</span>
      </h3>
      <div className={styles.casting}>
        {actorshows.map((show) => (
          <Link href={`/show?id=${show.id}`} key={show.id}>
            <ActorShowCard show={show} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShowCasting
