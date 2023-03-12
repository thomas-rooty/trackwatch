import { SearchResult } from '@/types/search.interface';

export const searchMulti = async (query: string, page = 1): Promise<SearchResult> => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Set the API URL using the provided query and page number
  const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  try {
    // Use fetch to make the API call and parse the response as JSON
    const response = await fetch(apiUrl);
    const data = await response.json();

    // If the API call was successful, return the search results
    return data as SearchResult;
  } catch (error) {
    // If there was an error, log it and return an empty result
    console.error(error);
    return { page: 0, total_pages: 0, total_results: 0, results: [] };
  }
}
