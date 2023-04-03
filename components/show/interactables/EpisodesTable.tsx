import styles from './episodestable.module.css';
import {useEffect} from 'react';
import { useShowStore } from '@/stores/show';
import { useSeasonStore } from '@/stores/season';

const EpisodesTable = () => {
  // API key
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get selected season
  const selectedSeason = useShowStore(state => state.selectedSeason)

  // Get, set seasons
  const seasonDetails = useSeasonStore(state => state.seasonDetails)
  const setSeasonDetails = useSeasonStore(state => state.setSeasonDetails)

  // Get show from store
  const show = useShowStore(state => state.show);

  // Call api to get episodes
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${show.id}/season/${selectedSeason}?api_key=${TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setSeasonDetails(data)
      })
  }, [TMDB_API_KEY, selectedSeason, setSeasonDetails, show.id])

  return (
    <div className={styles.episodesTable}>
      <table className={styles.table}>
        <tbody>
          {seasonDetails.episodes?.map(episode => (
            <tr key={episode.id} className={styles.episodeRow} onClick={() => console.log(episode.id)}>
              <td>{episode.episode_number}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesTable;
