import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import RecentSearch from "./components/RecentSearch";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "recent",
        element: <RecentSearch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);