import React from "react";

function ProfileCard({
  darkMode,
  userData,
  favourites,
  setFavourites
   
})
 {
  
  function handleAddToFavourite() {
    setFavourites((prev)=>[...prev,userData])
    return
  }
  const isAdded = favourites.some(
  (user) => user.id === userData.id); //isAdded becomes true if the current UserID already exist in the favourites array


  return (
    <div
      className={`max-w-4xl mx-auto rounded-2xl shadow-lg p-8 transition ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {userData.name || userData.login}
          </h1>

          <p className="text-blue-500">@{userData.login}</p>

          <p className="mt-4">
            {userData.bio || "No bio available."}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <span className="font-semibold">Followers:</span> {userData.followers}
            </div>

            <div>
              <span className="font-semibold">Following:</span> {userData.following}
            </div>

            <div>
              <span className="font-semibold">Repositories:</span> {userData.public_repos}
            </div>

            <div>
              <span className="font-semibold">Location:</span>{" "}
              {userData.location || "Not specified"}
            </div>

            <div>
              <span className="font-semibold">Company:</span>{" "}
              {userData.company || "Not specified"}
            </div>

            <div>
              <span className="font-semibold">Twitter:</span>{" "}
              {userData.twitter_username || "Not linked"}
            </div>

            <div>
              <span className="font-semibold">Website:</span>{" "}
              {userData.blog ? (
                <a
                  href={userData.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit
                </a>
              ) : (
                "Not available"
              )}
            </div>

            <div>
              <span className="font-semibold">Joined:</span>{" "}
              {new Date(userData.created_at).toLocaleDateString()}
            </div>
          </div>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View GitHub Profile
          </a>
          
          <button
          onClick={handleAddToFavourite} 
          disabled = {isAdded}
          className = {`inline-block mt-8 px-6 py-2 rounded-lg ml-35 text-white transition ${
             isAdded
             ? "bg-gray-500 cursor-not-allowed"
             : "bg-gray-600 hover:bg-gray-700 cursor-pointer"
             }`}>
              {isAdded ? "Added Successfully" : "Add to Favourites"}
           </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;