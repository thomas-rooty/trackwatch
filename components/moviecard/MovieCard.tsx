import styles from './moviecard.module.css'
import Image from "next/legacy/image";
import {useRouter} from "next/navigation";

const MovieCard = ({movie}: any) => {
  const router = useRouter()

  // Use movie.title or movie.name depending on the type of media
  const title = movie.title ? movie.title : movie.name

  // Function that redirects to /discover/[id] when a movie is clicked
  const handleMovieClick = () => {
    console.log('Redirect to :' + movie.id)
    console.log(movie)
    router.push(`/movie?id=${movie.id}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.addBtn} onClick={() => console.log(movie.id)}>
        <span className={styles.addBtnText}>Add</span>
      </div>
      <div className={styles.movieCard} onClick={() => handleMovieClick()}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={title}
          className={styles.moviePoster}
          width={165}
          height={280}
        />
        <div className={styles.overlay}/>
        <div className={styles.movieDetails}>
          <h3 className={styles.movieTitle}>{title}</h3>
          <span className={styles.movieVote}>{movie.vote_count} votes</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
