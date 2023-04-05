'use client'
import styles from './discover.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import PopularSeriesRecent from '@/components/categories/PopularSeriesRecent'
import PopularSeriesOfAllTime from '@/components/categories/PopularSeriesOfAllTime'
import SeriesWithNewEpSoon from '@/components/categories/SeriesWithNewEpSoon'
import SearchSeries from '@/components/categories/SearchSeries'

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <SearchSeries />
      <PopularSeriesRecent />
      <PopularSeriesOfAllTime />
      <SeriesWithNewEpSoon />
    </div>
  )
}

export default Discover
