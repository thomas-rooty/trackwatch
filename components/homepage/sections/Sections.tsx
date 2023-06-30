import styles from './sections.module.css'
import Section1 from '@/components/homepage/sections/Section1'
import Section2 from '@/components/homepage/sections/Section2'

const Sections = () => {
  return (
    <div className={styles.sections}>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Sections
