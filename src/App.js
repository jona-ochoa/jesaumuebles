import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages' 
import SigninPage from './pages/signin';

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/signin',
      element: <SigninPage />
    }
  ]);

  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}

export default App;