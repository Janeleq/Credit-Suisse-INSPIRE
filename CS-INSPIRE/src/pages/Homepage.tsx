// import React from 'react'
import Navbar from '../components/NavBar'
import Logo from '../assets/PerceptionPause_logo.png'
import BiasLogo from '../assets/BreakBias.png'


function HomePage() {
    return (
        <div>
            <Navbar/>

            <img src={Logo} className="logo" alt="logo" />
            <div className="row">
                <div className='col'>
                    <img src={BiasLogo} className="logo w-75 h-100" alt="biasLogo" />
                </div>
            </div>
            
        </div>
            
    )
}

export default HomePage