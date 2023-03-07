import {supabase} from "@/utils/supabase";

const Dashboard = () => {
  const handleSignOut = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) alert(error.message)

    history.pushState({}, '', '/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Dashboard
