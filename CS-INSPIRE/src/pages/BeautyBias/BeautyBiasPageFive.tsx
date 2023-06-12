import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import backArrow from '../assets/arrowBack.png'
import outcomeIcon from "../../assets/outcomeIcon.png"
import projectBg from "../../assets/projectProgress.jpg"
import mediateIcon from "../../assets/mediate.jpg"
import sideIcon from "../../assets/sideIcon.png"

function beautyBiasFive() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    
  
    const action = state.action
    const [candidate, setCandidate] = useState('')
    const [reflection, setReflection] = useState('')
    const [descOutcome, setDescOutcome] = useState('')
    const [nextDesc, setNextChosenDesc] = useState('') // data passed to the next page  
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
            setDescOutcome('Evaluating each applicant holistically, considering multiple aspects of their profile, helps overcome the halo effect bias and ensures a fair and comprehensive evaluation.')
        }
        else if (action == 2) {
            setDescOutcome('Relying heavily on GPA and standardized test scores as the primary factors for admission perpetuates the halo effect bias, as it prioritizes quantifiable measures and may overlook other valuable qualities and potential.')
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
      navigate("/bias/ageismRoleplayContFour", {state: {outcome: nextDesc, candidate: candidate, reflection: reflection}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                {/* <NavLink to="/bias/ageismRolePlayContThree"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

               <h2 className='lead'>
                {state.outcome}
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{descOutcome}</p>
        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${projectBg})`, backgroundSize: 'cover'}}>
                  <h4>Act 4: Building a Diverse Class</h4>
                  <p className='w-50 mx-auto'>Creating a diverse and inclusive student body is important to the college. </p>
              
                <p className='mt-5 w-50 mx-auto'>Action 4: Considering Diversity</p>
                <br/>
                <p className='mb-5'>As the manager, what would you do?</p>
              </div>
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to made the effort to liase with the top management to open more slots for the training program and encourage all team members to attend the training sessions.", "Encouraging all team members to attend training promotes equality and growth."])}>
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
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to suggest training only to the younger team members.", "Suggesting training only to younger team members perpetuates age-related biases."])}>
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
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, ["You have chosen to take the easy way out and dismiss the importance of training for the team.", "Dismissing the importance of training hinders personal and professional development."])}>
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
                <p>{nextDesc[0]}</p>
                <button className='w-25 mx-auto' onClick={Proceed}>Proceed</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default beautyBiasFive; 