import styles from './show.module.css';

const MovieDesc = ({movie}: any) => {
  // Store useful data and threat them in variables to improve readability at the return
  const network = movie.networks[0].name
  const status = movie.status
  let totalSeasons = movie.number_of_seasons + ' season'
  if (movie.number_of_seasons > 1) {
    totalSeasons += 's'
  }

  return (
    <div className={styles.movieDesc}>
      <h3 className={styles.movieDescTitle}>{status} • {network} • {totalSeasons}</h3>
      <p className={styles.movieDescText}>{movie.overview}</p>
    </div>
  );
};

export default MovieDesc;
