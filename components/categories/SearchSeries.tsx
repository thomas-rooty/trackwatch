import styles from './categories.module.css'
import { useSearchStore } from '@/stores/search'
import ShowCard from '@/components/cards/ShowCard'

const SearchSeries = () => {
  // Get search variables and functions from store
  const searchResults = useSearchStore((state) => state.searchResults)

  // Render search results only if there are any
  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <div className={styles.container}>
          <div className={styles.sectionTitleContainer}>
            <h1 className={styles.sectionTitle}>Search results</h1>
          </div>
          <div className={styles.cardsContainer}>
            {searchResults.map((show: any) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SearchSeries
