import styles from './seasonbtn.module.css';
import { Show } from '@/types/show.interface';
import { useShowStore } from '@/stores/show';

// Button dropdown with the seasons
const SeasonBtn = ({ show }: { show: Show }) => {
  const seasons = show.seasons;

  // Get and set season from store
  const season = useShowStore((state) => state.selectedSeason);
  const setSeason = useShowStore((state) => state.setSelectedSeason);

  const handleSeason = (e: any) => {
    setSeason(e.target.value);
  };

  return (
    <select className={styles.seasonBtn} onChange={handleSeason} value={season}>
      {seasons.map((season) => (
        <option key={season.id} value={season.season_number}>
          Season {season.season_number}
        </option>
      ))}
    </select>
  );
};

export default SeasonBtn;
