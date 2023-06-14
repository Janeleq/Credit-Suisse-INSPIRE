import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import backArrow from '../../assets/arrowBack.png'
import outcomeIcon from "../../assets/outcomeIcon.png"
import projectBg from "../../assets/workplaceDynamics.jpg"
import mediateIcon from "../../assets/mediate.jpg"

function HaloEffectSix() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    const [nextDesc, setNextChosenDesc] = useState('') // data passed to the next page 
    const [candidate, setCandidate] = useState('')
    const [reflection, setReflection] = useState('')
    const [descOutcome, setDescOutcome] = useState('')
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 0 ));
      } 

    useEffect(() => {
        setDescOutcome(state.outcome)
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

    const handleChoice = (event, param) => {
      console.log(event);
      console.log(param);
      setNextChosenDesc(param)  
  };


    const Proceed = () => {
      navigate("/bias/ageismRoleplayContFive", {state: {outcome: nextDesc, candidate: candidate, reflection: reflection}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
               <h2 className='lead'>
               <p>{descOutcome[0]}</p>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{descOutcome[1]}</p>
        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${projectBg})`, backgroundSize: 'cover'}}>
                  <h4>Act 4: Performance Evaluation</h4>
                  <p className='w-50 mx-auto'>It's time for the annual performance evaluations. You must assess each team member objectively. </p>
              
                {/* <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p> */}
                <br/>
                <p className='mb-5'>As the manager, what would you do?</p>
              </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ['You have chosen to evaulate each team member equally, based on their individual contributions and achievements.', 'Evaluating each team member objectively based on their individual contributions is fair.'])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={mediateIcon} style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 1</h4>
                            <small className="text-muted"> Evaluate each team member based on individual contributions and achievements.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to downplay Alex's contributions due to assumption of his age", "Downplaying Alex's contributions due to assumptions about age is essentially encouraging ageism."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={sideIcon} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Downplay Alex's contributions due to assumptions about age.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ['You have chosen to give Emma higher ratings based on assumptions about youth and energy.', "Giving Emma higher ratings based solely based on assumptions about youth and energy is unfair."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 3</h4>
                            <small className="text-muted">Give Emma higher ratings based on assumptions about youth and energy.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <p>{nextDesc[0]}</p>
                <button className='w-25 mx-auto' onClick={Proceed}>Proceed</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default HaloEffectSix; 