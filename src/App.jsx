import { Outlet } from "react-router-dom";
import { useState, useEffect} from "react";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])
  
  const [favourites, setFavourites] = useState(()=>{ //we are not using useState(localStorage.getItem("favourites")) 
    //because we just want favourites to store the saved file only at the initialization of componnent and dont want to check localstorage at every render
    const saved = localStorage.getItem("favourites");
    return (saved) ? JSON.parse(saved) :[]
    
  })

  // storing current favourite whenever the favourite changes(dependency)
  useEffect(() => {
  localStorage.setItem(
    "favourites",
    JSON.stringify(favourites)
  );
}, [favourites]);

  async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const result = await response.json()
    
    if(result.message === "Not Found") {
      setError("User not found")
      setUserData(null)
      return
    }
    if(result.message === "Not Found") {
      setError("User not found");
      setUserData(null);
      setRepos([]);
      return;
    }

    setError(null)
    
    setUserData(result);
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`)
    const reposData = await reposResponse.json()
    setRepos(reposData)
    
  }

  return (
    <>
      <Header
      darkMode = {darkMode}
      setDarkMode= {setDarkMode}
      onSearch = {fetchUser}
      />
      <Outlet context={{ 
        darkMode,
        setDarkMode,
        userData,
        repos,
        error,
        favourites,
        setFavourites
        }} />
    </>
  );
}

export default App;