import React from 'react'
import { Moon, Sun } from "lucide-react";
import { NavLink } from 'react-router-dom';

const Navbar = ({darkMode, setDarkMode}) => {
    
    const themeChange = () => {
        setDarkMode((prev) => !prev);
    };

  return (
    <div className=" w-full px-8 py-4" >
        <nav>
          <ul className="flex items-center gap-8 justify-end">
            <li>
              <NavLink
                to ="/"
                 className={({ isActive }) =>
                    `${isActive ? "text-blue-500 font-semibold" : ""}
                    ${darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                    `${isActive ? "text-blue-500 font-semibold" : ""}
                    ${darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              >
                Favourites
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/recent"
                className={({ isActive }) =>
                    `${isActive ? "text-blue-500 font-semibold" : ""}
                    ${darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              >
                Recent Searches
              </NavLink>
            </li>

            <li>
              <button
                onClick={themeChange}
                className={`p-2 rounded-full transition ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-black" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
