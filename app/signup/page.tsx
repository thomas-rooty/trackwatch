'use client'
import styles from './signup.module.css'
import RegisterForm from '@/components/forms/RegisterForm'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { ButtonMain } from '@/components/buttons/Buttons'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <ButtonMain>{'<'}</ButtonMain>
      </Link>
      <Image
        src="/img/background2.jpg"
        className={styles.backgroundImg}
        alt="background"
        layout="fill"
        objectFit="cover"
      />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
