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
import ContactPage from './pages/ContactPage.tsx'

// Halo Effect Pages
import HaloEffectPage from './pages/HaloEffect/HaloEffectPage.tsx'
import HaloEffectQuizPage from './pages/HaloEffect/HaloEffectQuizPage.tsx'
import HaloEffectRoleplayPage from './pages/HaloEffect/HaloEffectRoleplay.tsx'
import HaloEffectRoleplayContOne from './pages/HaloEffect/HaloEffectPageTwo.tsx'
import HaloEffectRoleplayContTwo from './pages/HaloEffect/HaloEffectPageThree.tsx'
import HaloEffectRoleplayContThree from './pages/HaloEffect/HaloEffectPageFour.tsx'
import HaloEffectRoleplayContFour from './pages/HaloEffect/HaloEffectPageFive.tsx'
import HaloEffectRoleplayContFive from './pages/HaloEffect/HaloEffectPageSix.tsx'
import HaloEffectRoleplayContSix from './pages/HaloEffect/HaloEffectPageSix.tsx'
import HaloEffectRoleplayContSeven from './pages/HaloEffect/HaloEffectPageSeven.tsx'


// Beauty Pages
import BeautyBiasPage from './pages/BeautyBias/BeautyBiasPage.tsx'
import BeautyBiasRoleplayPage from './pages/BeautyBias/BeautyBiasRoleplayPage.tsx'
import BeautyBiasFactsPage from './pages/BeautyBias/BeautyBiasFactsPage.tsx'
import BeautyRoleplayContOne from './pages/BeautyBias/BeautyBiasPageTwo.tsx'
import BeautyRoleplayContTwo from './pages/BeautyBias/BeautyBiasPageThree.tsx'
import BeautyRoleplayContThree from './pages/BeautyBias/BeautyBiasPageFour.tsx'
import BeautyRoleplayContFour from './pages/BeautyBias/BeautyBiasPageFive.tsx'


// General Quiz Page
import QuizPage from './pages/QuizPage.tsx'
import GeneralQuiz from './pages/GeneralQuizzesPage.tsx'
import BiasRealityCheckPage from './pages/BiasRealityCheckPage.tsx'


// Ageism Pages
import AgeismBiasPage from './pages/AgeismRoleplayPage.tsx'
import AgeismRoleplayContOne from './pages/AgeismBiasPageThree.tsx'
import AgeismFactsPage from './pages/AgeismFactsPage.tsx'
import AgeismBiasPageTwo from './pages/AgeismBiasPageTwo.tsx'
import AgeismRoleplayContTwo from './pages/AgeismBiasPageFour.tsx'
import AgeismRoleplayContThree from './pages/AgeismBiasPageFive.tsx'
import AgeismRoleplayContFour from './pages/AgeismBiasPageSix.tsx'
import AgeismRoleplayContFive from './pages/AgeismBiasPageSeven.tsx'
import AgeismRoleplayContSix from './pages/AgeismBiasPageEight.tsx'
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
    path: "/bias/haloeffectQuiz",
    element: <HaloEffectQuizPage/>
  },
  {
    path: "/bias/haloEffectRoleplay",
    element: <HaloEffectRoleplayPage/>  
  },  
  {
    path: "/bias/haloEffectRoleplayContOne",
    element: <HaloEffectRoleplayContOne/>  
  },  
  {
    path: "/bias/HaloEffectRoleplayContTwo",
    element: <HaloEffectRoleplayContTwo/>
  },
  {
    path: "/bias/HaloEffectRoleplayContThree",
    element: <HaloEffectRoleplayContThree/>
  },
  {
    path: "/bias/HaloEffectRoleplayContFour",
    element: <HaloEffectRoleplayContFour/>
  },
  {
    path: "/bias/HaloEffectRoleplayContFive",
    element: <HaloEffectRoleplayContFive/>
  },
  {
    path: "/bias/HaloEffectRoleplayContSix",
    element: <HaloEffectRoleplayContSix/>
  },
  {
    path: "/bias/HaloEffectRoleplayContSeven",
    element: <HaloEffectRoleplayContSeven/>
  },
  {
    path: "/bias/beauty",
    element: <BeautyBiasPage/>
  },
  {
    path: "/bias/beautyBiasRoleplay",
    element: <BeautyBiasRoleplayPage/>
  },
  {
    path: "/bias/beautyBiasFacts",
    element: <BeautyBiasFactsPage/>
  },
  {
    path: "/bias/beautyBiasRoleplayContOne",
    element: <BeautyRoleplayContOne/>
  },
  {
    path: "/bias/beautyBiasRoleplayContTwo",
    element: <BeautyRoleplayContTwo/>
  },
  {
    path: "/bias/beautyBiasRoleplayContThree",
    element: <BeautyRoleplayContThree/>
  },
  {
    path: "/bias/beautyBiasRoleplayContFour",
    element: <BeautyRoleplayContFour/>
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
    path: "/bias/ageismFacts",
    element: <AgeismFactsPage/>
  },
  {
    path: "/bias/ageismRoleplayContOne",
    element: <AgeismRoleplayContOne/>
  },
  {
    path: "/bias/ageismRoleplayContTwo",
    element: <AgeismRoleplayContTwo/>
  },
  {
    path: "/bias/ageismRoleplayContThree",
    element: <AgeismRoleplayContThree/>
  },
  {
    path: "/bias/ageismRoleplayContFour",
    element: <AgeismRoleplayContFour/>
  },
  {
    path: "/bias/ageismRoleplayContFive",
    element: <AgeismRoleplayContFive/>
  },
  {
    path: "/bias/ageismRoleplayContSix",
    element: <AgeismRoleplayContSix/>
  },
  {
    path: "/quiz",
    element: <QuizPage/>
  },
  {
    path: "/quiz/generalQuiz",
    element: <GeneralQuiz/>
  },
  {
    path: "/quiz/biasRealityCheck",
    element: <BiasRealityCheckPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
