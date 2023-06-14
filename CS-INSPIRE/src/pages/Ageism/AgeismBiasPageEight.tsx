import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import endBg from "../../assets/ageismEnd.png"

function AgeismSeven() {
    const {state} = useLocation();
    // const {reflection} = state.reflection;
    
    const [ageismRoleplayStatus, setAgeismRoleplayStatus] = useState("incomplete")
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 0 ));
      } 

    useEffect(() => {
        // setDescOutcome(state.outcome)
        // setCandidate(state.candidate)
        // setReflection(state.reflection)
        someRequest().then(() => {
          const loaderElement = document.querySelector(".loader-container");
          if (loaderElement) {
            loaderElement.remove();
            setLoading(!isLoading);
          }
        });
      });

    //   console.log(descOutcome)
    // console.log(useLocation().state.reflection)
    // console.log(useLocation().state.outcome)
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
      navigate("/bias/ageismRoleplayContSix")
  }

  const End = () => {
    setAgeismRoleplayStatus("complete")
    window.ageismStatus = "complete"
    navigate("/explore")


  }


    return (
        <div className='container-fluid p-0' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
                {/* <NavLink to="/bias/ageismRolePlayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

        
              <div className='mt-4 p-5' style={{height: '80vh', backgroundImage: `url(${endBg})`, backgroundSize: 'cover'}}>
                  <h4>Congratulations for reaching the end of Ageism roleplay!</h4>
                  <p className='w-50 mx-auto'>We hope through this roleplay you can get to see Ageism more objectively. </p>
        
              </div>
             
                <button className='w-25 mx-auto' onClick={End}>Finish Roleplay</button>

       
          </div>
            <Footer/>
        </div>
    
    )
}

export default AgeismSeven; 