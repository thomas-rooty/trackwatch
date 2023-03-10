import {supabase} from "@/utils/supabase";

export const appendShowToUser = async (showId: number, userId: string | undefined) => {
  // Get current user data from database
  const {data, error} = await supabase
    .from('users')
    .select('saved_shows')
    .eq('id', userId)
    .single()

  if (error) {
    console.error(error)
    return
  }

  // Check if showId already exists in saved_shows array
  const savedShows = data.saved_shows || []
  if (savedShows.includes(showId)) {
    console.log(`Show ${showId} is already in user ${userId}'s saved shows`)
    return
  }

  // Append showId to saved_shows array
  savedShows.push(showId)

  // Update user data in database
  const {error: updateError} = await supabase
    .from('users')
    .update({saved_shows: savedShows})
    .eq('id', userId)

  if (updateError) {
    console.error(updateError)
    return
  }

  console.log(`Show ${showId} added to user ${userId}'s saved shows`)
}
