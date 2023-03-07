import {useRef, useState} from 'react'
import {supabase} from "@/utils/supabase";
import Link from 'next/link'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Sign in user into Supabase
    setLoading(true)
    const {data, error} = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    })

    // Error handling
    if (error) {
      alert(error.message)
      setLoading(false)
      return
    }

    // Sign in successful
    console.log(data)
    alert(`Logged in successfully!`)
    setLoading(false)
    history.pushState({}, '', '/account')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef}/>

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef}/>

        <br/>
        <p>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginForm
