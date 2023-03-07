"use client"
import styles from './login.module.css'
import LoginForm from "@/components/login/LoginForm";

const Login = () => {
  return (
    <div className={styles.main}>
      <LoginForm/>
    </div>
  )
}

export default Login
