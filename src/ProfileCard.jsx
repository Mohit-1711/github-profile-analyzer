import React from "react";

function ProfileCard({
  darkMode,
  avatar,
  username,
  name,
  bio,
  followers,
  following,
  repos,
  location,
  company,
  blog,
  twitter,
  created,
  profile,
}) {
  return (
    <div
      className={`max-w-4xl mx-auto mt-10 rounded-2xl shadow-lg p-8 transition ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={avatar}
            alt={username}
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {name || username}
          </h1>

          <p className="text-blue-500">@{username}</p>

          <p className="mt-4">
            {bio || "No bio available."}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <span className="font-semibold">Followers:</span> {followers}
            </div>

            <div>
              <span className="font-semibold">Following:</span> {following}
            </div>

            <div>
              <span className="font-semibold">Repositories:</span> {repos}
            </div>

            <div>
              <span className="font-semibold">Location:</span>{" "}
              {location || "Not specified"}
            </div>

            <div>
              <span className="font-semibold">Company:</span>{" "}
              {company || "Not specified"}
            </div>

            <div>
              <span className="font-semibold">Twitter:</span>{" "}
              {twitter || "Not linked"}
            </div>

            <div>
              <span className="font-semibold">Website:</span>{" "}
              {blog ? (
                <a
                  href={blog}
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
              {new Date(created).toLocaleDateString()}
            </div>
          </div>

          <a
            href={profile}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;