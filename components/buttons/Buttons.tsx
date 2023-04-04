import styles from './Buttons.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const ButtonMain = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.buttonMain} {...props}>
      {children}
    </button>
  )
}

export const ButtonSecondary = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.buttonSecondary} {...props}>
      {children}
    </button>
  )
}
