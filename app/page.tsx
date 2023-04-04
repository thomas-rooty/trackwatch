import styles from './page.module.css'
import Navbar from "@/components/homepage/navbar/Navbar";
import Header from "@/components/homepage/header/Header";
import Sections from "@/components/homepage/sections/Sections";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Header />
      <Sections />
    </div>
  )
}
