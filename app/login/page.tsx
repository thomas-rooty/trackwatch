'use client'
import styles from './login.module.css'
import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/legacy/image'
import {ButtonSecondary} from "@/components/buttons/Buttons";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <ButtonSecondary>{'Back to home'}</ButtonSecondary>
      </Link>
      <Image src="/img/background.jpg" className={styles.backgroundImg} alt="background" layout="fill" objectFit="cover" />
      <LoginForm />
    </div>
  )
}

export default LoginPage
