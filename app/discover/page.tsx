'use client'
import styles from './discover.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import PopularSeries from '@/components/categories/PopularSeries'
import OverallPopularSeries from '@/components/categories/OverallPopularSeries'
import NewSeries from '@/components/categories/NewSeries'

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <PopularSeries />
      <OverallPopularSeries />
      <NewSeries />
    </div>
  )
}

export default Discover
