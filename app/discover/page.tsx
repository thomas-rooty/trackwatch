'use client'
import styles from './discover.module.css'
import Sidebar from "@/components/sidebar/Sidebar";
import PopularMovies from "@/components/discover/PopularMovies";
import PopularSeries from "@/components/discover/PopularSeries";
import OnTheAir from "@/components/discover/OnTheAir";
import ComedyMovies from "@/components/discover/ComedyMovies";

const Discover = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <PopularMovies/>
      <PopularSeries/>
      <OnTheAir/>
      <ComedyMovies/>
    </div>
  )
}

export default Discover
