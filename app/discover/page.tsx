'use client'
import styles from './discover.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import PopularSeries from '@/components/categories/PopularSeries'
import MostPopularSeries from '@/components/categories/MostPopularSeries'
import NewSeries from '@/components/categories/NewSeries'
import SearchSeries from '@/components/categories/SearchSeries';

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <SearchSeries />
      <PopularSeries />
      <MostPopularSeries />
      <NewSeries />
    </div>
  )
}

export default Discover
