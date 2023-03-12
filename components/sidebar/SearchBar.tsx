import styles from './sidebar.module.css'
import SearchbarIcon from '@/public/icons/searchbar.png'
import Image from 'next/legacy/image'
import { useSearchStore } from '@/stores/search'
import { searchMulti } from '@/components/sidebar/searchFunctions'

const SearchBar = () => {
  // Get search variables and functions from store
  const searchQuery = useSearchStore((state) => state.searchQuery)
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery)
  const setSearchResults = useSearchStore((state) => state.setSearchResults)

  // Handle search query change
  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      const results = await searchMulti(searchQuery)
      setSearchResults(results)
    }
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchIconContainer}>
          <Image src={SearchbarIcon} width={20} height={20} alt="search icon" />
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch()
          }}
        />
        <div
          className={styles.cancelSearch}
          onClick={() => {
            setSearchQuery('')
            setSearchResults([])
          }}
        >
          x
        </div>
      </div>
    </div>
  )
}

export default SearchBar
