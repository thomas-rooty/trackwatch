export interface Show {
  cast: Array<{
    adult: boolean
    character: string
    credit_id: string
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string | null
  }>
  backdrop_path: string | null
  created_by: Array<{
    id: number
    credit_id: string
    name: string
    gender: number | null
    profile_path: string | null
  }>
  episode_run_time: number[]
  first_air_date: string
  genres: Array<{
    id: number
    name: string
  }>
  homepage: string | null
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    still_path: string | null
    vote_average: number
    vote_count: number
  } | null
  name: string
  networks: Array<{
    id: number
    name: string
    logo_path: string | null
    origin_country: string
  }>
  next_episode_to_air: null
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: Array<{
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  seasons: Array<{
    air_date: string | null
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
  }>
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string | null
  type: string
  vote_average: number
  vote_count: number
}
