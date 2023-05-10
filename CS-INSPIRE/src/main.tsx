import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/Homepage.tsx'
import ArticlesPage from './pages/ArticlesPage.tsx'
import RoleplayPage from './pages/RoleplayPage.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  }, 
  {
    path:"/about",
    element: <HomePage/>
  },
  {
    path:"/roleplay",
    element: <RoleplayPage/>
  },
  {
    path: "/explore",
    element: <ArticlesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
