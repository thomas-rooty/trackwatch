import styles from './header.module.css'
import {ButtonMain} from "@/components/buttons/Buttons";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          Track your favorite shows, and binge smarter.
        </h1>
        <p className={styles.description}>
          Get notified when new episodes are released, and see what's trending.
        </p>
        <div className={styles.startSection}>
          <p className={styles.description}>
            Ready to binge? Sign up for free and never lose track again
          </p>
          <Link href={'/signup'}>
            <ButtonMain>Register now</ButtonMain>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
