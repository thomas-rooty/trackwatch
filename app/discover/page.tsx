'use client'
import styles from './discover.module.css'
import Sidebar from "@/components/sidebar/Sidebar";
import PopularSeries from "@/components/discover/PopularSeries";
import OverallPopularSeries from "@/components/discover/OverallPopularSeries";
import NewSoon from "@/components/discover/NewSoon";

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <PopularSeries/>
      <OverallPopularSeries/>
      <NewSoon/>
    </div>
  )
}

export default Discover
