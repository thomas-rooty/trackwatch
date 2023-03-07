import {useRef} from 'react'
import {supabase} from "@/utils/supabase";
import Link from 'next/link'

const SignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Sign up user into Supabase
    const {data, error} = await supabase.auth.signUp({
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    })

    // Error handling
    if (error) {
      alert(error.message)
      return
    }

    // Sign up successful
    console.log(data)
    alert(`Check your email for the login link!`)
    history.pushState({}, '', '/login')
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
          Already have an account? <Link href="/login">Log in</Link>
        </p>

        <button type="submit">Sign up</button>
      </form>
    </>
  )
}

export default SignupForm
