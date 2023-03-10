import styles from './show.module.css';
import { useShowStore } from '@/stores/show';

const ShowHeader = () => {
  // Get show from store
  const show = useShowStore(state => state.show);

  // Convert release date to year
  const releaseYear = show.first_air_date.split('-')[0];

  // Round vote average to nearest 0.01
  const voteAverage = Math.round(show.vote_average * 100) / 100;

  return (
    <div className={styles.container}>
      <h1 className={styles.showTitle}>{show.name} ({releaseYear})</h1>
      <span className={styles.genres}>
        {show.genres.map((genre, index) => (
          <span key={genre.id}>{genre.name}{index !== show.genres.length - 1 && ', '}</span>
        ))}
      </span>
      <span className={styles.inProduction}>{show.in_production ? 'In production' : 'Ended'}</span>
      <span className={styles.voteAverage}>SCORE : {voteAverage}/10</span>
    </div>
  );
};

export default ShowHeader;
