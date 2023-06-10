import'../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../components/NavBarLogin'
import Footer from '../components/Footer';
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
    
    const outcome = state.outcome
    const action = state.action
    const [candidate, setCandidate] = useState('')
    const [reflection, setReflection] = useState('')
    const [descOutcome, setDescOutcome] = useState('')
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 0 ));
      } 

    useEffect(() => {
        setCandidate(state.candidate)
        setReflection(state.reflection)
        someRequest().then(() => {
          const loaderElement = document.querySelector(".loader-container");
          if (loaderElement) {
            loaderElement.remove();
            setLoading(!isLoading);
          }
        });
      });


    useEffect(() => {
        if (action == 1) {
            setDescOutcome('Mediating and encouraging open dialogue fosters understanding and collaboration.')
        }
        else if (action == 2) {
            setDescOutcome('Siding with one team member based on personal bias exacerbates age-related conflicts.')
        }
        else {
            setDescOutcome('Ignoring the conflict allows it to escalate and negatively impact team dynamics.')
        }
      });

    console.log(useLocation().state.reflection)
    console.log(useLocation().state.outcome)
    // function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    //     return new Promise(resolve => setTimeout(() => resolve(), 0 ));
    //   } 

    // useEffect(() => {
    //     someRequest().then(() => {
    //       const loaderElement = document.querySelector(".loader-container");
    //       if (loaderElement) {
    //         loaderElement.remove();
    //         setLoading(!isLoading);
    //       }
    //     });
    //   });

    const handleChoice = (event, param) => {
      console.log(event);
      console.log(param);
   
  };


    const Proceed = () => {
      navigate("/bias/ageismRoleplayContThree", {state: {outcome: outcome, candidate: candidate, reflection: reflection}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                <NavLink to="/bias/ageismRolePlayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink>

               <h2 className='lead'>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{descOutcome}</p>
        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${projectBg})`, backgroundSize: 'cover'}}>
                  <h4>Act 3: Training and Development</h4>
                  <p className='w-50 mx-auto'>It is now weeks past the project and you feel like the team could have some further training and development 
                   to further their skillsets to excel in the project. As such, you look to the various training programs offered by the company to enhance employee skills. </p>
              
                <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p>
                <br/>
                <p className='mb-5'>As the manager, what would you do?</p>
              </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ['Action 1', "You have chosen to mediate between Emma and John, encouraging open dialogue between them, getting rid of potential bias"])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={mediateIcon} style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 1</h4>
                            <small className="text-muted">Liase with the top management to open more slots for the training program and encourage all team members to attend the training sessions.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ['Action 2', "You have chosen side with one team member based on personal bias."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={sideIcon} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Suggest training only to younger team members.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ['Action 3', "You have chosen to ignore the conflict between both Emma and John, and hope it resolves itself."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 3</h4>
                            <small className="text-muted">Dismiss the importance of training for the team.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <button className='w-25 mx-auto' onClick={Proceed}>Proceed</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default AgeismFour; 