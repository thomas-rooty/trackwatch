'use client'
import styles from './Forms.module.css'
import React, { useState } from 'react'
import { useAuthStore } from '@/stores/auth'
import Image from 'next/legacy/image'
import BrandLogo from '@/public/img/brand_logo.png'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useAuthStore((state) => state.signIn)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await signIn(email, password)
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={BrandLogo} className={styles.logo} alt="logo" />
        <p>Binge smarter, not harder.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
        <div className={styles.formFooter}>
          <p>Dont have an account?</p>
          <a href="/signup">Create account</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
