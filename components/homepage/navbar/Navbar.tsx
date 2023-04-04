import styles from './navbar.module.css'
import BrandInline from '@/public/img/brand_inline.png'
import Image from "next/legacy/image";
import Link from 'next/link'
import {ButtonMain} from "@/components/buttons/Buttons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href={'/'}>
          <Image src={BrandInline} alt="Brand"/>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href={'/login'}>
          <ButtonMain>Sign in</ButtonMain>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
