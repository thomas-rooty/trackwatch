import styles from './moviecard.module.css'
import Image from "next/legacy/image";

const MovieCard = ({movie}: any) => {
  return (
    <div className={styles.movieCard} onClick={() => console.log(movie.title)}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.moviePoster}
        width={165}
        height={250}
      />
      <div className={styles.overlay}/>
      <div className={styles.movieDetails}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <span className={styles.movieVote}>{movie.vote_count} votes</span>
      </div>
    </div>
  )
}

export default MovieCard
