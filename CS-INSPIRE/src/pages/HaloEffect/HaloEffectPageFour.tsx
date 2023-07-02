import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import backArrow from '../../assets/arrowBack.png'
import outcomeIcon from "../../assets/outcomeIcon.png"
import mediateIcon from "../../assets/mediate.jpg"
import actionIcon from "../../assets/action.png"
import holisticBg from "../../assets/holisticBg.jpg"

function HaloEffectFour() {
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
       
        setCandidate(state.action)
        someRequest().then(() => {
          const loaderElement = document.querySelector(".loader-container");
          if (loaderElement) {
            loaderElement.remove();
            setLoading(!isLoading);
          }
        });
      });


    useEffect(() => {
        if (candidate == 1) {
            setOutcome('Asking open-ended questions that allow applicants to showcase their interests, values, and experiences provides a holistic view of their character and potential.')
        }
        else if (candidate == 2) {
            setOutcome("Asking questions that solely focus on academic achievements or standardized test scores perpetuates the halo effect bias, as it emphasizes a single aspect of an applicant's profile and overlooks other valuable qualities.")
        }
      });


    const handleChoice = (event, param) => {
      console.log(event);
      console.log(param);
      setChosenDesc(param[1])
      setAction(param[0])
  
  };


    const Proceed = () => {
      navigate("/bias/HaloEffectRoleplayContFour", {state: {reflection: reflection, outcome: chosenDesc, action: action, candidate: candidate}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                {/* <NavLink to="/bias/ageismRoleplayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}
                <p>{state.outcome} </p>
                {/* {reflection} */}

               <h2 className='lead'>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{outcome}</p>
                
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${holisticBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <h4>Act 3: Holistic Evaluation</h4>
                  <p className='w-50 mx-auto'>Now that you have interviewed the selected applications, It's time to make decisions on which applicants to admit. </p>


                  <h6><img src={actionIcon} alt="action" style={{width: '3%'}}/>&nbsp; Action 3: Evaluating Applicants</h6>
                {/* <p className='mt-5'>Emma and John have differing approaches due to their generational differences.</p>
                <p className='mb-5'>As the manager, what would you do?</p> */}
              </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [1, "You have chosen to evaluate each applicant thoroughly and holistically, considering their all-rounded achievements and interview performance before making your final decision."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={mediateIcon} style={{borderRadius: '50%'}} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 1</h4>
                            <small className="text-muted">Evaluate each applicant holistically, putting consideration alongside with their interview performance.<br/>
                            </small>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => handleChoice(event, [2, "You have chosen to primarily look on their GPA and make your final decision."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Action 2</h4>
                            <small className="text-muted">Rely heavily on GPA and standardized test scores as the primary factors for admission.<br/>
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

export default HaloEffectFour; 