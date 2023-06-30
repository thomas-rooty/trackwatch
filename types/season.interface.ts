export interface Season {
  _id: string
  air_date: string | null
  episodes: Array<{
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
  }>
  name: string
  overview: string
  id: number
  poster_path: string | null
  season_number: number
}
