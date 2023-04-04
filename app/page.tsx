import styles from './page.module.css'
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Header />
    </div>
  )
}
