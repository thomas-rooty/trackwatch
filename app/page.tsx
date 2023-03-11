import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <Link href={'/'}>Home</Link>
        <Link href={'/signup'}>Signup</Link>
        <Link href={'/login'}>Login</Link>
      </div>
    </div>
  )
}
