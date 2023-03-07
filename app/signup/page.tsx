"use client"
import styles from './signup.module.css'
import SignupForm from "@/components/signup/SignupForm";

const Signup = () => {
  return (
    <div className={styles.main}>
      <SignupForm/>
    </div>
  )
}

export default Signup
