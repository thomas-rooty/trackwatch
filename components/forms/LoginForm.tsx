"use client"
import styles from '../../app/login/login.module.css'
import {useState} from 'react'
import {useAuthStore} from "@/stores/auth";

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useAuthStore((state) => state.signIn)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      console.log('User logged in!')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign In</button>
      <p>Dont have an account? <a href="/signup">Sign up</a></p>
    </form>
  )
}

export default LoginForm
