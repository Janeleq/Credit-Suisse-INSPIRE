import'../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../components/NavBarLogin'
import Footer from '../components/Footer';
import useSound from "use-sound"
import exp from '../assets/experience.jpg'
import respected from '../assets/respected.jpg'
import energetic from '../assets/energetic.png'
import trackRecord from '../assets/trackRecord.png'
import perspective from '../assets/perspective.png'
import action from '../assets/action.png'
import workplaceDynamics from '../assets/workplaceDynamics.jpg'
import reflectionIcon from '../assets/reflectionIcon.png'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import backArrow from '../assets/arrowBack.png'
import {IconContext} from "react-icons"
import outcomeIcon from "../assets/outcomeIcon.png"
import projectBg from "../assets/projectProgress.jpg"
import mediateIcon from "../assets/mediate.jpg"
import sideIcon from "../assets/sideIcon.png"

function AgeismFour() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    const [outcome, setOutcome] = useState('')
    const [emoji, setEmoji] = useState('')
    const [action, setAction] = useState(0)
    const [reflection, setReflection] = useState('')
    const [candidate, setCandidate] = useState('')   
    const [chosenDesc, setChosenDesc] = useState('')
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 0 ));
      } 

    useEffect(() => {
        setReflection(state.reflection)
        setCandidate(state.candidate)
        someRequest().then(() => {
          const loaderElement = document.querySelector(".loader-container");
          if (loaderElement) {
            loaderElement.remove();
            setLoading(!isLoading);
          }
        });
      });


    useEffect(() => {
        if (candidate == 'Alex') {
            setOutcome('Selecting Alex solely based on experience may perpetuate age-related biases.')
        }
        else if (candidate == 'Emma') {
            setOutcome('Selecting Emma solely based on youth may overlook the value of experience.')
        }
        else {
            setOutcome('Selecting John for their diverse perspectives ensures a balanced and inclusive team.')
            setEmoji("FaBeer")
          
        }
      });


    const handleChoice = (event, param) => {
      console.log(event);
      console.log(param);
      setChosenDesc(param[1])
      setAction(param[0])
  
  };


    const Proceed = () => {
      navigate("/bias/ageismRoleplayContThree", {state: {reflection: reflection, outcome: outcome, action: action, candidate: candidate}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                <NavLink to="/bias/ageismRolePlayContOne"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink>
                <p>You have choosen {candidate} </p>
                {/* {reflection} */}

               <h2 className='lead'>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{outcome}</p>
                
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${projectBg})`, backgroundSize: 'cover'}}>
                  <h4>Act 2: Team Dynamics</h4>
                  <p className='w-50 mx-auto'>Now that the team leader has been chosen for the project, the project progresses.
                    However as time passes, conflicts arise within the team. </p>
              
                <p className='mt-5'>Emma and John have differing approaches due to their generational differences.</p>
                <p className='mb-5'>As the manager, what would you do?</p>
              </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [1, "You have chosen to mediate between Emma and John, encouraging open dialogue between them, and getting rid of potential bias"])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={mediateIcon} style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 1</h4>
                            <small className="text-muted">Mediate between Emma and John, encouraging open dialogue<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [2, "You have chosen to side with one team member based on personal bias."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={sideIcon} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Side with one team member based on personal bias.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [3, "You have chosen to ignore the conflict between both Emma and John, and hope it resolves itself."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 3</h4>
                            <small className="text-muted">Ignore the conflict and hope it resolves itself.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <p>{chosenDesc}</p>
                <button className='w-25 mx-auto' onClick={Proceed}>Proceed</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default AgeismFour; 