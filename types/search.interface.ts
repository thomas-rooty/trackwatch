export interface SearchResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<{
    id: number;
    name?: string;
    title?: string;
    overview: string;
    first_air_date?: string;
    release_date?: string;
    poster_path: string | null;
    known_for_department?: string;
    profile_path?: string | null;
  }>;
}
