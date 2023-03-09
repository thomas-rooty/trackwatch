import styles from './show.module.css';
import { Show } from '@/types/show.interface';

const ShowDesc = ({ show }: { show: Show }) => {
  // Store useful data and threat them in variables to improve readability at the return
  const network = show.networks[0].name
  const status = show.status
  let totalSeasons = show.number_of_seasons + ' season'
  if (show.number_of_seasons > 1) {
    totalSeasons += 's'
  }

  return (
    <div className={styles.showDesc}>
      <h3 className={styles.showDescTitle}>{status} • {network} • {totalSeasons}</h3>
      <p className={styles.showDescText}>{show.overview}</p>
    </div>
  );
};

export default ShowDesc;
