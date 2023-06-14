import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import outcomeIcon from "../../assets/outcomeIcon.png"
import projectBg from "../../assets/workplaceDynamics.jpg"


function HaloEffectSix() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    
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

      console.log(descOutcome)
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
      navigate("/bias/ageismRoleplayContSix", {state: {outcome: outcome, candidate: candidate, reflection: reflection}})
  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                {/* <NavLink to="/bias/ageismRolePlayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

               <h2 className='lead'>
               <p>{descOutcome[0]}</p>
                  <img src={outcomeIcon} alt="outcome" style={{width: '3%'}}/> &nbsp;
                   Outcome / Consequence of your action</h2>
                <p>{descOutcome[1]}</p>
        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${projectBg})`, backgroundSize: 'cover'}}>
                  <h4>The end</h4>
                  <p className='w-50 mx-auto'>Based on the user's choices, the outcome of the simulation will vary. If the user consistently selects options that challenge unconscious bias and promote inclusivity, the team will overcome conflicts, benefit from diverse perspectives, and create a positive work environment. However, if the user selects options influenced by age bias, the team will face challenges, hinder collaboration </p>
              
                {/* <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p> */}
                <br/>
             
              </div>
   
                <button className='w-25 mx-auto' onClick={Proceed}>Proceed</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default HaloEffectSix; 