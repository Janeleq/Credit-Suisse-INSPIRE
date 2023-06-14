import'../../styles/_ageism.css'
import React, {useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import workplaceDynamics from '../../assets/workplaceDynamics.jpg'
import { useNavigate, NavLink } from 'react-router-dom';
import reflectionIcon from '../../assets/reflectionIcon.png'


function AgeismTwo() {
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

        <div style={{marginTop: '9vh', height: '100vh', backgroundImage: `url(${workplaceDynamics})`, backgroundSize: 'cover'}}>
           
            <div className='p-5 roleplayDesc text-center w-75 mx-auto'>

                <h2 className='text-center mt-5'>Scenario: Workplace Dynamics</h2>
                <p className='w-50 mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You will assume the role of Sarah, a mid-level manager in a large corporation. The goal is to navigate various workplace scenarios and address unconscious bias related to ageism. Your actions will shape the outcome of the simulation.</p>
                <br/><br/>
                <h4>Act 1: Team Assignment</h4>
                <p className='w-50 text-center mx-auto' style={{borderRadius: '5px', padding: '10px'}}> You are tasked with building a new project team 
                   and you required a leader to lead the project. You have a few available candidates for choosing:<br/><br/>     
                </p><br/>
                    <NavLink to= "/bias/ageismRoleplayContOne">Proceed</NavLink>
            </div>
        </div>
           
           
      
        <Footer/>
    </div>
        
    )
}

export default AgeismTwo