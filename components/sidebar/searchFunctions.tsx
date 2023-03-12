export const searchMulti = async (query: string): Promise<any> => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Set the API URL using the provided query and page number
  const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false&sort_by=vote_count.desc`

  try {
    // Use fetch to make the API call and parse the response as JSON
    const response = await fetch(apiUrl)
    const data = await response.json()

    // Sort by vote count
    data.results.sort((a: any, b: any) => b.vote_count - a.vote_count)

    // If the API call was successful, return the search results
    return data.results as any
  } catch (error) {
    // If there was an error, log it and return an empty result
    console.error(error)
  }
}
