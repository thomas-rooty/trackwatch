import styles from './page.module.css'
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
    </div>
  )
}
