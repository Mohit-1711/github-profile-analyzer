import { useState } from 'react'
import SearchBar from './SearchBar'
import ProfileCard from './ProfileCard'
import RepoList from './RepoList'
function App() {
  const [userData, setUserData] = useState(null)
  const [darkMode, setDarkMode] = useState(true);
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])

  async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const result = await response.json()
    
    if(result.message === "Not Found") {
      setError("User not found")
      setUserData(null)
      return
    }
    setError(null)
    
    setUserData(result);
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`)
    const reposData = await reposResponse.json()
    setRepos(reposData)
    
  }

  return (
   <>
   <div
   
  className={`min-h-screen ${
    darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-black"
  }`}
>
  <SearchBar
    onSearch={fetchUser} //passing fetchUser fxn as a parameter in searchBar fxn
    darkMode={darkMode}
    setDarkMode={setDarkMode}
  />
  
  {error && <p className="text-red-500 text-center mt-4">{error}</p>}

  {userData && (
    <ProfileCard
  darkMode={darkMode}
  avatar={userData.avatar_url}
  username={userData.login}
  name={userData.name}
  bio={userData.bio}
  followers={userData.followers}
  following={userData.following}
  repos={userData.public_repos}
  location={userData.location}
  company={userData.company}
  blog={userData.blog}
  twitter={userData.twitter_username}
  created={userData.created_at}
  profile={userData.html_url}
/>
  )}

  {userData && (<RepoList 
  repos={repos}
  darkMode={darkMode}
  />)}

  

</div>
   </>
  )
  
}
export default App
