import React from "react";
import { useOutletContext } from "react-router-dom";

const Favourites = () => {
  const { favourites, setFavourites, darkMode } = useOutletContext();

  function handleRemoveFavourite(userId) {
    setFavourites((prev) =>
      prev.filter((user) => user.id !== userId)
    );
  }

  if (favourites.length === 0) {
    return (
      <div
        className={`min-h-screen flex justify-center items-center ${
          darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <h1 className="text-2xl font-semibold">
          No favourites added yet.
        </h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Favourites</h1>

      <div className="space-y-4">
        {favourites.map((user) => (
          <div
            key={user.id}
            className={`flex justify-between items-center p-5 rounded-xl shadow-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Left Side */}
            <div className="flex items-center gap-5">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />

              <div>
                <h2 className="text-xl font-bold">
                  {user.name || user.login}
                </h2>

                <p className="text-gray-500">@{user.login}</p>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Right Side */}
            <button
              onClick={() => handleRemoveFavourite(user.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;