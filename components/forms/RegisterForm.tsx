'use client'
import styles from './Forms.module.css'
import React, { useState } from 'react'
import { useUserStore } from '@/stores/user'
import Image from 'next/legacy/image'
import BrandLogo from '@/public/img/brand_logo.png'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUp = useUserStore((state) => state.signUp)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signUp(name, email, password)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={BrandLogo} className={styles.logo} alt="logo" />
        <p>Binge smarter, not harder.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className={styles.input}
          placeholder={'...'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className={styles.input}
          placeholder={'...'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className={styles.input}
          placeholder={'...'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.submitBtn} type="submit">
          Sign In
        </button>
        <div className={styles.formFooter}>
          <p>Already have an account?</p>
          <a href="/login">Sign in</a>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
