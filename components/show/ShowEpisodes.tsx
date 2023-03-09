import styles from './show.module.css';
import { Show } from '@/types/show.interface';
import Image from 'next/legacy/image';
import Episodes from '@/public/icons/episodes.svg';
import SeasonBtn from '@/components/show/interactables/SeasonBtn';
import EpisodesTable from '@/components/show/interactables/EpisodesTable';

const ShowEpisodes = ({ show }: { show: Show }) => {
  return (
    <div className={styles.showContent}>
      <div className={styles.left}>
        <h3 className={styles.sectionTitle}>
          <Image src={Episodes} alt='Episodes' width={26} height={26} />
          <span className={styles.episodeText}>Episodes</span>
        </h3>
        <div className={styles.sectionPoster}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
            className={styles.posterImg}
            width={330}
            height={500}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.sectionSeasons}>
          <SeasonBtn show={show} />
          <EpisodesTable show={show} />
        </div>
      </div>
    </div>
  );
};

export default ShowEpisodes;
