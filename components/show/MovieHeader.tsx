import styles from './show.module.css';

interface MovieHeaderProps {
  movie: {
    name: string,
    first_air_date: string,
    backdrop_path: string,
    genres: {
      id: number,
      name: string
    }[],
    vote_average: number,
    in_production: boolean
  }
}

const MovieHeader = ({movie}: MovieHeaderProps) => {
  // Convert release date to year
  const releaseYear = movie.first_air_date.split('-')[0];

  // Round vote average to nearest 0.01
  const voteAverage = Math.round(movie.vote_average * 100) / 100;

  return (
    <div className={styles.container}>
      <h1 className={styles.movieTitle}>{movie.name} ({releaseYear})</h1>
      <span className={styles.genres}>
        {movie.genres.map((genre, index) => (
          <span key={genre.id}>{genre.name}{index !== movie.genres.length - 1 && ', '}</span>
        ))}
      </span>
      <span className={styles.inProduction}>{movie.in_production ? 'In production' : 'Ended'}</span>
      <span className={styles.voteAverage}>SCORE : {voteAverage}/10</span>
    </div>
  );
};

export default MovieHeader;
