import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainEl from "./components/MainEl";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";


function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <NotFound />
        },
        {
            path: "/country/:name",
            element: <Details />
        },
    ])

  return (
      <>
          <Header/>
          <MainEl >
              <RouterProvider router={router} />
          </MainEl>
      </>
  );
}

export default App;
