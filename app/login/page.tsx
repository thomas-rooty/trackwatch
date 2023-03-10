'use client';
import styles from './login.module.css';
import LoginForm from '@/components/forms/LoginForm';
import Image from 'next/legacy/image';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/img/background.jpg'
        className={styles.backgroundImg}
        alt='background'
        layout='fill'
        objectFit='cover'
      />
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
