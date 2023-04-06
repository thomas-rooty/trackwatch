import { useShowStore } from '@/stores/show'
import styles from './show.module.css'
import ActorCard from '@/components/cards/ActorCard'
import Image from 'next/legacy/image'
import Casting from '@/public/icons/casting.svg'

const ShowCasting = () => {
  const show = useShowStore((state) => state.show)
  console.log(show)

  return (
    <div className={styles.castingContainer}>
      <h3 className={styles.sectionTitle}>
        <Image src={Casting} alt="Casting" width={30} height={30} />
        <span className={styles.title}>Casting</span>
      </h3>
      <div className={styles.casting}>
        {show?.cast?.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  )
}

export default ShowCasting
