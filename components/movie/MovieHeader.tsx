import styles from './movie.module.css';

interface MovieHeaderProps {
  movie: {
    title: string,
    backdrop_path: string,
    genres: {
      id: number,
      name: string
    }[]
  }
}

const MovieHeader = ({movie}: MovieHeaderProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.movieTitle}>{movie.title}</h1>
      <span className={styles.genres}>
        {movie.genres.map((genre, index) => (
          <span key={genre.id}>{genre.name}{index !== movie.genres.length - 1 && ', '}</span>
        ))}
      </span>
    </div>
  );
};

export default MovieHeader;
