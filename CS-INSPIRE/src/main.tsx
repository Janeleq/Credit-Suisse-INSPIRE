import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Homepage.tsx'
import HomePageLogin from './pages/HomepageLogin.tsx'
import ArticlesPage from './pages/ArticlesPage.tsx'
import RoleplayPage from './pages/RoleplayPage.tsx'
import GenderBiasPage from './pages/GenderBiasPage.tsx'
import LoginPage from './pages/SignInPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import HelpPage  from './pages/HelpPage.tsx'
import ResourcePage from './pages/ResourcesPage.tsx'
import CommunityPage from './pages/CommunityPage.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ''

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Community from './pages/CommunityPage.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>,
  }, 
  {
    path:"/home",
    element: <HomePageLogin/>
  },
  {
    path:"/register",
    element: <RegisterPage/>
  },
  {
    path:"/explore",
    element: <RoleplayPage/>
  },
  {
    path: "/articles",
    element: <ArticlesPage/>
  },
  {
    path: "/bias/gender",
    element: <GenderBiasPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/resources",
    element: <ResourcePage/>
  },
  {
    path: "/help",
    element: <HelpPage/>
  },
  {
    path: "/community",
    element: <CommunityPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
