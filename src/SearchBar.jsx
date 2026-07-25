import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function SearchBar({ onSearch, darkMode}) {
   
  //onSearch is the fetchUser fxn

  const [username, setUsername] = useState("");

  function handleSearch() {
    if (username.trim() === "") return;
    onSearch(username); //onSearch = fetchUser => fetchUser(searched input)
  }

  return (
    <div
      className="w-full max-w-md"
    >
        {/*------------------- Search Bar -----------------*/}

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}

            className={`w-80 rounded-md border px-4 py-2 outline-none transition ${
              darkMode
                ? "border-gray-600 bg-gray-800 text-white focus:border-blue-500"
                : "border-gray-300 bg-gray-100 text-black focus:border-blue-500"
            }`}
          />

          <button
            onClick={handleSearch}
            className={`rounded-md px-5 py-2 font-medium transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Search
          </button>
        </div>
    </div>
  );
}

export default SearchBar;
