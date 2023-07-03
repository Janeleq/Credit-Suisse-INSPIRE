import'../../styles/_ageism.css'
import React, {useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import useSound from "use-sound"
import exp from '../../assets/experience.jpg'
import respected from '../../assets/respected.jpg'
import energetic from '../../assets/energetic.png'
import trackRecord from '../../assets/trackRecord.png'
import perspective from '../../assets/perspective.png'
import action from '../../assets/action.png'
import socialGathering from '../../assets/socialGatheringBg.jpg'
import reflectionIcon from '../../assets/reflectionIcon.png'
import backArrow from '../../assets/arrowBack.png'
import { NavLink, useNavigate } from 'react-router-dom'

function BeautyBiasRoleplay() {
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showReflection, setShowReflection] = useState(false)
    

    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
    } 


    return (
        <div className="container-fluid bootdey p-0 bg-light" style={{overflow: 'hidden'}}>
            <NavigationBar/>

        <div style={{marginTop: '9vh', height: '100vh', backgroundImage: `url(${socialGathering})`, backgroundSize: 'cover'}}>
           
            <div className='p-5 roleplayDesc bg-light text-center w-75 mx-auto'>

                <h2 className='text-center mt-5'>Scenario: Social Interactions</h2>
                <p className='w-50 mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You will assume the role of Alex, a young adult navigating various social interactions. The goal is to recognize and challenge the unconscious bias of beauty bias in everyday life.</p>
                <br/><br/>
                <h4>Act 1: Social Gathering</h4>
                <p className='w-50 text-center mx-auto' style={{borderRadius: '5px', padding: '10px'}}> You are attending a social gathering with friends and acquaintances and you must decide how to present yourself. <br/>     
                </p><br/>
                    <NavLink to= "/bias/beautyBiasRoleplayContOne">Proceed</NavLink>
            </div>
        </div>
           
           
      
        <Footer/>
    </div>
        
    )
}

export default BeautyBiasRoleplay