import'../../styles/_ageism.css'
import {useRef, useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom'
import endBg from "../../assets/ageismEnd.png"
import mitigatingBg from "../../assets/homepageLogin/mitigatingBias.png"
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
        <div className='container-fluid p-0 bg-light text-dark' style={{overflow: 'hidden'}}>
            <NavigationBar/>
            <div style={{marginTop: '5vh'}}>
            <div
          style={{
            backgroundImage: `url(${mitigatingBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
              color: 'black'
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
            The Role of Education and Continuous Learning
            </span>
        
          </h1>
          <br />
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "20px", paddingLeft: "12vw" }}
          >
            <div className="row" style={{ paddingLeft: "" }}>
              <div className="col-sm-12 w-75">
              Congratulations on reaching till the end of Ageism roleplay. We hope through the roleplay you are able to see ageism more objectively.
              </div>
            </div>
          </p>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>
        <Footer/>
        </div>
    
         
        </div>
    
    )
}

export default AgeismSeven; 