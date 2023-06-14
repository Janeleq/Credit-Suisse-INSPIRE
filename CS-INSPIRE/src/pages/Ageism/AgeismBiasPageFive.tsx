import'../../styles/_ageism.css'
import {useState, useEffect} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom'
import outcomeIcon from "../../assets/outcomeIcon.png"

import trainingBg from '../../assets/trainingAndDevelopmentBg.png'
import importanceIcon from '../../assets/ageism/dismissImportanceIcon.png'
import liaseIcon from '../../assets/ageism/liaseIcon.png'
import trainingIcon from '../../assets/ageism/trainingYounger.png'

function AgeismFive() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    
  
    const action = state.action
    const [candidate, setCandidate] = useState('')
    const [reflection, setReflection] = useState('')
    const [descOutcome, setDescOutcome] = useState('')
    const [nextDesc, setNextChosenDesc] = useState('') // data passed to the next page  
    const [isLoading, setLoading] = useState(true);
    const [favorable, setFavorable] = useState('')
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
            setDescOutcome('😊 Mediating and encouraging open dialogue fosters understanding and collaboration.')
            setFavorable("✔️ Favorable")
        }
        else if (action == 2) {
            setDescOutcome('😔 Siding with one team member based on personal bias exacerbates age-related conflicts.')
            setFavorable("❌ Not favorable")
        }
        else {
            setDescOutcome('😔 Ignoring the conflict allows it to escalate and negatively impact team dynamics.')
            setFavorable("❌ Not favorable")
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
    setNextChosenDesc(param)

    };


    const Proceed = () => {
      if (nextDesc) {
      navigate("/bias/ageismRoleplayContFour", {state: {outcome: nextDesc, candidate: candidate, reflection: reflection}})
       }

      else {
        alert("Please pick an action for the current scenario!")
      }
    }


    return (
        <div className='container-fluid p-0 bg-light' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '15vh'}}>
                {/* <NavLink to="/bias/ageismRolePlayContThree"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

               <h2 className='lead'>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action<br/> 
                      <span className='text-muted' style={{marginLeft: '-2%'}}>{favorable}</span>
                   </h2> 
                <p>{descOutcome}</p>
        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${trainingBg})`, backgroundSize: 'cover'}}>
                  <h4>Act 3: Training and Development</h4>
                  <p className='w-50 mx-auto'>It is now weeks past the project and you feel like the team could have some further training and development 
                   to further their skillsets to excel in the project. As such, you look to the various training programs offered by the company to enhance employee skills. </p>
              
                <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p>
                <br/>
                <p className='mb-5'>As the manager, what would you do?</p>
              </div>
              
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to made the effort to liase with the top management to open more slots for the training program and encourage all team members to attend the training sessions.", "Encouraging all team members to attend training promotes equality and growth."])}>
                    <div className="team text-center rounded p-3 py-4 py-4 w-75 h-75 mx-auto">
                        <img src={liaseIcon} style={{width: '279px', height: '279px'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt="liase with top management"/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 1</h4>
                            <small className="text-muted">Liase with the top management to open more slots for the training program and encourage all team members to attend the training sessions.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to suggest training only to the younger team members.", "Suggesting training only to younger team members perpetuates age-related biases."])}>
                    <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
                        <img src={trainingIcon} style={{width: '279px', height: '279px', borderRadius: '45%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt="dismiss importance" style={{width: '279px', height: '279px'}}/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Suggest training only to younger team members.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to take the easy way out and dismiss the importance of training for the team.", "Dismissing the importance of training hinders personal and professional development."])}>
                    <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
                        <img src={importanceIcon} style={{width: '279px', height: '279px', borderRadius: '45%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 3</h4>
                            <small className="text-muted">Dismiss the importance of training for the team.<br/>
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

export default AgeismFive; 