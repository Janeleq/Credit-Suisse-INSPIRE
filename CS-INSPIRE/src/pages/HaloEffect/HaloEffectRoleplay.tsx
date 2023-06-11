import'../../styles/_ageism.css'
import React, {useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import collegeBackground from '../../assets/collegeApplicationBackground.png'
import { NavLink, useNavigate } from 'react-router-dom'

function HaloEffectRoleplay() {
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showReflection, setShowReflection] = useState(false)
    

    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
    } 

    function goNext() {
        navigate("/bias/ageismRoleplayCont", {state: {reflection: showReflection}})
    }





    return (
        <div className="container-fluid bootdey p-0 bg-light" style={{overflow: 'hidden'}}>
            <NavigationBar/>

        <div style={{marginTop: '9vh', height: '100vh', backgroundImage: `url(${collegeBackground})`, backgroundSize: 'cover', opacity: 0.8}}>
           
            <div className='p-5 roleplayDesc text-center w-75 mx-auto' style={{color: 'rgba(0, 0, 0, 1)' }}>

                <h2 className='text-center mt-5'>Scenario: College Admissions</h2>
                <p className='w-50 mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You will assume the role of Alex, a college admissions officer responsible for evaluating applicants. The goal is to navigate the admissions process while being aware of and challenging the halo effect bias.Your actions will shape the outcome of the simulation.</p>
                <br/><br/>
                <h4 style={{opacity: 1}}>Act 1: Reviewing Applications</h4>
                <p className='w-50 text-center mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You have a stack of college applications to review.<br/><br/>     
                </p><br/>
                    <NavLink to= "/bias/haloEffectRoleplayContOne">Proceed</NavLink>
            </div>
        </div>
           
           
      
        <Footer/>
    </div>
        
    )
}

export default HaloEffectRoleplay