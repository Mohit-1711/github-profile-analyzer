import React from 'react'
import Navbar from './Navbar'
import SearchBar from '../SearchBar'
import { useLocation } from "react-router-dom";




const Header = ({darkMode, setDarkMode, onSearch}) => {
    
    const currentLocation = useLocation();
    const showSearchBar = currentLocation.pathname === "/";
  return (
    <div  className={`flex items-center justify-between px-8 py-3   ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-300 text-black"
  }`}>
     {showSearchBar && ( //if path is "/" then only render SearchBar
    <SearchBar
      darkMode={darkMode}
      onSearch={onSearch}
    />
  )}

  {/* Always displaying navbar */}
  
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/> 
      
    </div>
  )
}

export default Header
