import React from 'react'
import { useState } from 'react'
import ProfileCard from '../ProfileCard'
import RepoList from '../RepoList'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const { darkMode,userData,repos,error,favourites,setFavourites} = useOutletContext();

  return (
   <>
   <div
   
  className={`min-h-screen ${
    darkMode ? "bg-gray-950 text-white " : "bg-gray-50 text-black"
  }`}
>
 
  
  {error && <p className="text-red-500 text-center p-4">{error}</p>}

  {userData && (
    <ProfileCard 
    userData = {userData}
    darkMode={darkMode}
    favourites={favourites}
    setFavourites={setFavourites}
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

export default Home
