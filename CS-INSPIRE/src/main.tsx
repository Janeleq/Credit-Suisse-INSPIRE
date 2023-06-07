import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Homepage.tsx'
import HomePageLogin from './pages/HomepageLogin.tsx'
import ArticlesPage from './pages/ArticlesPage.tsx'
import RoleplayPage from './pages/RoleplayPage.tsx'
import GenderBiasPage from './pages/GenderBiasPage.tsx'
import GenderRoleplayPage from './pages/GenderRoleplayPage.tsx'
import GenderFactsPage from './pages/GenderFactsPage.tsx'
import LoginPage from './pages/SignInPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import HelpPage  from './pages/HelpPage.tsx'
import ResourcePage from './pages/ResourcesPage.tsx'
import CommunityPage from './pages/CommunityPage.tsx'
import AgeismBiasPage from './pages/AgeismBiasPage.tsx'
import HaloEffectPage from './pages/HaloEffectPage.tsx'
import BeautyBiasPage from './pages/BeautyBiasPage.tsx'
import AgeismBiasPageTwo from './pages/AgeismBiasPageTwo.tsx'
import QuizPage from './pages/QuizPage.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js"

// import ''

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


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
    path: "/bias/ageism",
    element: <AgeismBiasPage/>
  },
  {
    path: "/bias/haloeffect",
    element: <HaloEffectPage/>
  },
  
  {
    path: "/bias/beauty",
    element: <BeautyBiasPage/>
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
  },
  {
    path: "/bias/gender/facts",
    element: <GenderFactsPage/>
  },
  {
    path: "/bias/gender/roleplay",
    element: <GenderRoleplayPage/>
  },
  { path: "/bias/ageismRoleplay",
    element: <AgeismBiasPageTwo/>
  },
  {
    path: "/quiz",
    element: <QuizPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
