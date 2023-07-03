import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import outcomeIcon from "../../assets/outcomeIcon.png"
import projectBg from "../../assets/projectProgress.jpg"
import mediateIcon from "../../assets/mediate.jpg"
import sideIcon from "../../assets/sideIcon.png"
import actionIcon from "../../assets/action.png"
import resumeIcon from "../../assets/resumeIcon.jpg"
// import openEndedIcon from "../../assets/openEndedQuesIcoon.png"
// import interviewingBg from "../../assets/interviewingBg.jpeg"

function BeautyBiasThree() {
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
       if (state.reflection == "null") {
        setReflection('You did not enter any reflection')
       }
       else {
        setReflection(state.reflection)
        // console.log(reflection)
       }
       
        setCandidate(state.chosenDesc)
        someRequest().then(() => {
          const loaderElement = document.querySelector(".loader-container");
          if (loaderElement) {
            loaderElement.remove();
            setLoading(!isLoading);
          }
        });
      });


    useEffect(() => {
 
        if (state.action == 'Action 1') {
            setOutcome('Reading each application thoroughly and considering academic achievements and extracurricular activities ensures fair evaluation based on merit.')
        }
        else if (state.action == 'Action 2') {
            setOutcome('Glancing at the names and making quick judgments based on reputation or popularity reinforces the halo effect bias and can lead to unfair evaluations.')
        }
        console.log(outcome)
      });


    const handleChoice = (event, param) => {
      console.log(event);
      console.log(param);
      setChosenDesc(param[1])
      setAction(param[0])
  
  };


    const Proceed = () => {
      navigate("/bias/beautyBiasRoleplayContThree", {state: {reflection: reflection, outcome: chosenDesc, action: action, candidate: candidate}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                {/* <NavLink to="/bias/ageismRoleplayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}
                <p> {candidate} </p>
                {/* {reflection} */}

               <h2 className='lead'>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{outcome}</p>
                
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${interviewingBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center  ' }}>
                  <h4>Act 2: Social Gathering (Conversation Partners)</h4>
                  <p className='w-50 mx-auto'>After reviewing the stack of applications, you selected a few of them and have the opportunity to interview the selected applicants to learn more about them. </p>
                  <br/> 

                  <p className='mb-5'><img src={actionIcon} alt="action" style={{width: '3%'}}/>&nbsp;What would you do?</p>
              </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [1, "You have chosen to make the effort to ask open-ended questions that allow applicants to showcase their interests, values, and experiences provides a holistic view of their character and potential."])}>
                    <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
                        <img src="" style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Engage<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [2, "You have chosen to just focus on the individual academic achievements and test scores, forgoing everything else."])}>
                    <div className="team text-center rounded p-3 py-4 w-50 h-50 mx-auto">
                        <img src={resumeIcon} style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Asking questions that solely focus on academic achievements or standardized test scores perpetuates the halo effect bias, as it emphasizes a single aspect of an applicant's profile and overlooks other valuable qualities.<br/>
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

export default BeautyBiasThree; 