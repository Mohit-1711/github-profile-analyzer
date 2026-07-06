import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function SearchBar({ onSearch, darkMode, setDarkMode }) { //onSearch is the fetchUser fxn
  const [username, setUsername] = useState("");

  const themeChange = () => {
    setDarkMode((prev) => !prev);
  };

  function handleSearch() {
    if (username.trim() === "") return;
    onSearch(username); //onSearch = fetchUser => fetchUser(searched input)
  }

  return (
    <div
      className={`w-full px-8 py-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Search Bar */}
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

        {/* Navbar */}
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className={`transition ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#favourites"
                className={`transition ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                Favourites
              </a>
            </li>

            <li>
              <a
                href="#recent"
                className={`transition ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                Recent Searches
              </a>
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
    </div>
  );
}

export default SearchBar;
