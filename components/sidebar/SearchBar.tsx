import styles from './sidebar.module.css'
import SearchbarIcon from '@/public/icons/searchbar.png'
import Image from 'next/legacy/image'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchIconContainer}>
          <Image src={SearchbarIcon} width={20} height={20} alt="search icon" />
        </div>
        <input type="text" className={styles.searchInput} placeholder="Search..." />
      </div>
    </div>
  )
}

export default SearchBar
