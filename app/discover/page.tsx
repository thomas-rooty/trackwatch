'use client'
import styles from './discover.module.css'
import Sidebar from "@/components/sidebar/Sidebar";
import Popular from "@/components/discover/Popular";
import Recent from "@/components/discover/Recent";
import Comedy from "@/components/discover/Comedy";

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <Popular/>
      <Recent/>
      <Comedy/>
    </div>
  )
}

export default Discover
