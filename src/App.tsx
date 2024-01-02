import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';

import './App.css';

import LogIn from './pages/logIn/index.tsx';
import JobOverview from './pages/jobOverview/index.tsx';
import ErrorPage from './errorPage';
import Navigation from './pages/navigation/index.tsx';
import { RootState } from './store';

function App() {
  const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isLoggedIn);

  const loggedOut = createBrowserRouter(
    [
    {
      path: "/*",
      element: <LogIn />,
      errorElement: <ErrorPage />,
    },
  ]
);

  const router = createBrowserRouter(
      [
      {
        path: "/",
        element: <JobOverview />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/joboverview",
        element: <JobOverview />,
      },
      {
        path: "/aimanager",
        element: <Navigation />,
      },
      {
        path: "/datasetmanager",
        element: <Navigation />,
      },
      {
        path: "/usermanager",
        element: <Navigation />,
      },
    ]
  );

  return (
    <RouterProvider router={!isLoggedIn ? loggedOut : router} />
  );
}

export default App;

