import { useShowStore } from '@/stores/show'
import styles from './show.module.css'
import ActorCard from '@/components/cards/ActorCard'
import Image from 'next/legacy/image'
import Casting from '@/public/icons/casting.svg'
import Link from 'next/link'

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
          <Link href={`/actor?id=${actor.id}`} key={actor.id}>
            <ActorCard actor={actor} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShowCasting
