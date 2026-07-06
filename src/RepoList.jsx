import React from "react";

function RepoList({ repos, darkMode }) {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Repositories ({repos.length})
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className={`rounded-xl p-5 shadow-md transition ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <h3 className="text-xl font-semibold text-blue-500">
              {repo.name}
            </h3>

            <p className="mt-2 text-sm">
              {repo.description || "No description available"}
            </p>

            <div className="flex justify-between mt-5 text-sm">
              <span>⭐ {repo.stargazers_count}</span>

              <span>🍴 {repo.forks_count}</span>

              <span>{repo.language || "N/A"}</span>
              
              

            </div>
            <div className="flex justify-between items-center ">
            <a
              href={repo.html_url}
              target="_blank" //opens site in new tab
              rel="noreferrer" // without this the destination website can see which page you came from.
              //GitHub would know that the visitor came from your website.
              className="mt-5 text-blue-500 hover:underline "
            >
              View Repository →
            </a>

            {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer"
                className=" text-green-500 hover:underline mt-5">Visit Site →</a>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;