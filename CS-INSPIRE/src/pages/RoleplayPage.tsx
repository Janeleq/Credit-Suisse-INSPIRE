// import React from 'react'
import Navbar from '../components/NavBarLogin.tsx'
import '../styles/_roleplay.css'
import ageism from '../assets/ageism.jpg'
import haloeffect from '../assets/haloeffect.jpg'
import sexism from '../assets/sexism.jpg'
import beautybias from '../assets/beauty-bias.jpg'
import Chatbot from '../components/Chatbot.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function RoleplayPage() {
  const navigate = useNavigate();

  const [status, setStatus] = useState('')

  // useEffect(() => {
  //   if (status == 'True'){
  //     console.log("navigating")
  //     navigate('/bias/gender')
  //     setStatus('False')
  //   }
  // })

  
  const [isLoading, setLoading] = useState(true);
  
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  function ageismGo() {
    if (confirm("Embark on the path to discover the unconscious bias: ageism?"))
    {
      navigate('/bias/ageism')
    }

  }

  function haloEffectGo() {
    if (confirm("Embark on the path to discover the unconscious bias: Halo Effect?"))
    {
      navigate('/bias/haloeffect')
    }

  }

  function sexismGo() {
    if (confirm("Embark on the path to discover the unconscious bias: Sexism / Gender bias?"))
    {
      navigate('/bias/gender')
    }

  }

  function beautyGo() {
    if (confirm("Embark on the path to discover the unconscious bias: Beauty bias?"))
    {
      navigate('/bias/beauty')
    }

  }
  

    return (        
    <div className="container-fluid" style={{marginTop: '10%'}}>
      <Chatbot/>
      <Navbar></Navbar>
        <blockquote className='display-6 text-center' style={{marginTop: '100px'}}>Explore the different pathways of unconscious biases </blockquote>
        <p className='text-center'>See how you fare in the various paths</p>
      <br/>
      <div className='container'>
        <div className="icon-image" onClick={ageismGo}>
          <div className="icon">
            <img src={ageism} alt="ageism" />
          </div>
          
          <div className="hover-image one">
            <div className="img">
              <img src={ageism} alt="" />
            </div>
            <div className="content">
              <div className="details">
                <div className="name">Ageism</div>
                <div className="job">Path 1</div>
              </div>
            </div>
          </div>
        
        </div>
        <div className="icon-image" onClick = {sexismGo}>
          <div className="icon">
            <img src={sexism} alt="sexism" />
          </div>
          <div className="hover-image one">
            <div className="img">
              <img src={sexism} alt="sexism" />
            </div>
            <div className="content">
              <div className="details">
                <div className="name">Gender/Sexism</div>
                <div className="job">Path 2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-image" onClick={haloEffectGo}>
          <div className="icon">
            <img src={haloeffect} alt="haloeffect" />
          </div>
          <div className="hover-image one">
            <div className="img">
              <img src={haloeffect} alt="haloeffect" />
            </div>
            <div className="content">
              <div className="details">
                <div className="name">Halo Effect</div>
                <div className="job">Path 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-image" onClick={beautyGo}>
          <div className="icon">
            <img src={beautybias} alt="beautybias" />
          </div>
          <div className="hover-image one">
            <div className="img">
              <img src={beautybias} alt="beautybias" />
            </div>
            <div className="content">
              <div className="details">
                <div className="name">Beauty Bias</div>
                <div className="job">Path 4</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
    )
}

export default RoleplayPage;