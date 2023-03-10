import styles from './showcard.module.css';
import Image from "next/legacy/image";
import {useRouter} from "next/navigation";
import {Show} from "@/types/show.interface";
import {useAuthStore} from "@/stores/auth";
import {appendShowToUser} from "@/utils/supabaseFunctions";

const ShowCard = ({show}: { show: Show }) => {
  const router = useRouter()

  // Get user from store
  const user = useAuthStore(state => state.user)
  const setUser = useAuthStore(state => state.setUser)

  // Function that redirects to /discover/[id] when a show is clicked
  const handleShowClick = () => {
    console.log('Redirect to :' + show.id)
    router.push(`/show?id=${show.id}`)
  }

  // Function that appends show id to user's saved_shows array
  const handleAddClick = () => {
    appendShowToUser(show.id, user?.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.addBtn} onClick={() => handleAddClick()}>
        <span className={styles.addBtnText}>Add</span>
      </div>
      <div className={styles.showCard} onClick={() => handleShowClick()}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={show.name}
          className={styles.showPoster}
          width={165}
          height={280}
        />
        <div className={styles.overlay}/>
        <div className={styles.showDetails}>
          <h3 className={styles.showTitle}>{show.name}</h3>
          <span className={styles.showVote}>{show.vote_count} votes</span>
        </div>
      </div>
    </div>
  )
}

export default ShowCard
