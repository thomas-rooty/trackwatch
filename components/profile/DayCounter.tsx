import styles from './daycounter.module.css'

interface DayCounterProps {
  minutes: number
}

const DayCounter = ({ minutes }: DayCounterProps) => {
  // Component that displays the number of month, days, hours and minutes the user has watched
  const months = Math.floor(minutes / 43800)
  const days = Math.floor((minutes % 43800) / 1440)
  const hours = Math.floor(((minutes % 43800) % 1440) / 60)
  const minutesLeft = Math.floor(((minutes % 43800) % 1440) % 60)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lifespan lost watching shows</h1>
      <div className={styles.counterContainer}>
        <div className={styles.counter}>
          <div className={styles.numberContainer}>
            <p className={styles.number}>{months}</p>
          </div>
          <p className={styles.text}>Months</p>
        </div>
        <div className={styles.counter}>
          <div className={styles.numberContainer}>
            <p className={styles.number}>{days}</p>
          </div>
          <p className={styles.text}>Days</p>
        </div>
        <div className={styles.counter}>
          <div className={styles.numberContainer}>
            <p className={styles.number}>{hours}</p>
          </div>
          <p className={styles.text}>Hours</p>
        </div>
        <div className={styles.counter}>
          <div className={styles.numberContainer}>
            <p className={styles.number}>{minutesLeft}</p>
          </div>
          <p className={styles.text}>Minutes</p>
        </div>
      </div>
    </div>
  )
}

export default DayCounter
