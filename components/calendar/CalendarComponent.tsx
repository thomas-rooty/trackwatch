import React, { useState } from 'react'
import styles from './calendar.module.css'
import ArrowLeft from '@/public/icons/arrow_left.png'
import ArrowRight from '@/public/icons/arrow_right.png'
import Image from 'next/legacy/image'
import Link from 'next/link'

type Event = {
  id: number
  title: string
  date: Date
}

type Props = {
  events: Event[]
}

const Calendar: React.FC<Props> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const weeksInMonth = (month: number, year: number) => {
    const lastDateOfMonth = new Date(year, month + 1, 0)
    const daysInMonth = lastDateOfMonth.getDate()
    const firstDateOfMonth = new Date(year, month, 1)
    const firstDayOfMonth = firstDateOfMonth.getDay()
    const daysInFirstWeek = 7 - firstDayOfMonth
    const remainingDays = daysInMonth - daysInFirstWeek
    return Math.ceil(remainingDays / 7) + 1
  }

  const weeks = []
  const numWeeksInMonth = weeksInMonth(currentMonth, currentYear)

  for (let weekIndex = 1; weekIndex <= numWeeksInMonth; weekIndex++) {
    const week = []
    for (let dayIndex = 1; dayIndex <= 7; dayIndex++) {
      const dayOfMonth = (weekIndex - 1) * 7 + dayIndex - (7 - new Date(currentYear, currentMonth, 1).getDay())
      const date = new Date(currentYear, currentMonth, dayOfMonth)
      week.push(date)
    }
    weeks.push(week)
  }

  const prevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1)
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear)
  }

  const nextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1)
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear)
  }

  const redirectToShow = (show: number) => {
    window.location.href = `/show?id=${show}`
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.button} onClick={prevMonth}>
          <Image src={ArrowLeft} alt="Previous month" width={26} height={26} />
        </button>
        <h2 className={styles.title}>
          {new Date(currentYear, currentMonth).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button className={styles.button} onClick={nextMonth}>
          <Image src={ArrowRight} alt="Next month" width={26} height={26} />
        </button>
      </div>
      {weeks.map((week, index) => (
        <div className={styles.week} key={index}>
          {week.map((date) => (
            <div
              className={`${styles.day} ${date.getMonth() === currentMonth ? styles.currentMonth : styles.otherMonth} ${
                date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()
                  ? styles.currentDay
                  : ''
              }`}
              key={date.toDateString()}
            >
              <div className={styles.date}>{date.getDate()}</div>
              <div className={styles.events}>
                {events
                  .filter((event) => event.date.toDateString() === date.toDateString())
                  .map((event) => (
                    <Link href={`/show?id=${event.id}`} key={event.id}>
                      <div key={event.id} className={styles.event}>
                        {event.title}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Calendar
