"use client"
import styles from './login.module.css'
import {useState} from 'react'
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/stores/auth";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signIn} = useAuthStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      router.push('/account')
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
    </form>
  )
}

export default Login
