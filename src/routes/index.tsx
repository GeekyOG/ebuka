import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import React from "react";
import Bookings from "../pages/Bookings";
import Discovery from "../pages/Discovery";
import Gallery from "../pages/Gallery";
import BioPage from "../pages/BioPage";
import Tours from "../pages/Tours";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Videos from "../pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="min-h-[100vh]">
          <Outlet />
        </div>

        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/Discography",
        element: <Discovery />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/biography",
        element: <BioPage />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },

      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
