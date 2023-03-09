'use client'
import styles from './discover.module.css'
import Sidebar from "@/components/sidebar/Sidebar";
import DiscoverList from "@/components/discover/DiscoverList";

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <DiscoverList/>
    </div>
  )
}

export default Discover
