import styles from './show.module.css';

const MovieDesc = ({movie}: any) => {
  return (
    <div className={styles.movieDesc}>
      <h3 className={styles.movieDescTitle}>Overview</h3>
      <p className={styles.movieDescText}>{movie.overview}</p>
    </div>
  );
};

export default MovieDesc;
