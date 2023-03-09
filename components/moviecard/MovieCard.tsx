import styles from './moviecard.module.css'
import Image from "next/legacy/image";

const MovieCard = ({movie}: any) => {
  // Use movie.title or movie.name depending on the type of media
  const title = movie.title ? movie.title : movie.name
  return (
    <div className={styles.movieCard} onClick={() => console.log(title)}>
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
  )
}

export default MovieCard
