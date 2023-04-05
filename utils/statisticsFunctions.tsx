import { ShowDetails } from '@/types/showdetails.interface'

// Calculate how many episodes have been watched by the user
export const calculateEpisodesWatched = (showDetails: ShowDetails[]) => {
  let episodesWatched = 0

  showDetails?.forEach((show: ShowDetails) => {
    episodesWatched += show.number_of_episodes
  })

  return episodesWatched
}

// Calculate how many seasons have been watched by the user
export const calculateSeasonsWatched = (showDetails: ShowDetails[]) => {
  let seasonsWatched = 0

  showDetails?.forEach((show: ShowDetails) => {
    seasonsWatched += show.number_of_seasons
  })

  return seasonsWatched
}

// Calculate how many minutes have been watched by the user (average of 45 minutes per episode)
export const calculateMinutesWatched = (showDetails: ShowDetails[]) => {
  let minutesWatched = 0

  showDetails?.forEach((show: ShowDetails) => {
    minutesWatched += show.number_of_episodes * 45
  })

  return minutesWatched
}

// Calculate how many shows have been watched by the user
export const calculateShowsWatched = (showDetails: ShowDetails[]) => {
  let showsWatched = 0

  showDetails?.forEach((show: ShowDetails) => {
    showsWatched++
  })

  return showsWatched
}
