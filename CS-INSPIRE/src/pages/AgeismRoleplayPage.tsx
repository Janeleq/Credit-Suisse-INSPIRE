import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import action from '../assets/action.png'
import reflectionIcon from '../assets/reflectionIcon.png'
import background from '../assets/ageism.jpg'
import roleplay from '../assets/roleplaying.jpg'
import funfacts from '../assets/funfacts.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import AgeismFacts from './AgeismFactsPage';
// import { FaPerson } from 'react-icons/fa';

function Ageism() {
    const [isLoading, setLoading] = useState(true);
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
    } 

    useEffect(() => {
      someRequest().then(() => {
        const loaderElement = document.querySelector(".loader-container");
        if (loaderElement) {
          loaderElement.remove();
          setLoading(!isLoading);
        }
      });
    });

    function AgeismRoleplay () {
        console.log("Heading to profile page!")
        navigate("/bias/ageismRoleplay", {state: {email: email}})
    }

    function AgeismFacts() {
      console.log("Heading to Ageism page")
      navigate("/bias/ageismFacts", {state: {email: email}})
    }

    return (
        <div className="container-fluid bootdey p-0">
            <NavigationBar/>
        <div className="row" style={{marginTop: '9vh', height: '80vh'}}>
          <div className='col-4' style={{backgroundImage:`url(${background})`, backgroundSize: 'cover'}}>

          </div>
            <div className="col-8 text-center">
                <div className="section-title mt-5 mb-4 pb-2">
                    <h4 className="title mb-4">Unconscious Bias: <mark>Ageism</mark></h4>
                    <p className="text-muted para-desc mx-auto mb-0">
                    Ageism refers to the stereotypes, prejudices, and discrimination based on a person's age. It can manifest in various ways, such as assumptions about capabilities, intellect, or relevance solely based on someone's age. Unfortunately, these biases can influence our perceptions and judgments without our conscious awareness.
                    <br/><br/>
                    We recognize that ageism can have far-reaching consequences in society, affecting employment opportunities, healthcare access, and interpersonal relationships.
                    </p>
                    <br/><br/>
                    <div className='row'>
                      <div className='col'>
                        <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Roleplay</p>
                        
                        <small>Guide</small>
                        <p>Before we start, here is a short description of how the roleplay will go</p>
                        <div className='guide'>
                            <img src={action} alt="action" style={{width: '5%'}}/> <br/>
                            <img src={reflectionIcon} alt="reflection" style={{width: '3%'}}/>
                            <br/>
                            <button type="" onClick={AgeismRoleplay}>Start</button>
                        </div> 
                      </div>
                      <div className='col'>
                        <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Statistics</p>
                        
                        <div className='guide w-50 mx-auto'>
                          <p>Get to know some statistics regarding ageism!</p>
                            the characters are color-coded in different colors to allow better differentiation
                            
                           
                            <i className="fa fa-male" aria-hidden="true"></i>
                            <button type="" onClick={AgeismFacts}>View statistics</button>
                        </div> 
                      </div>
                    </div>
                
                    <br/>
                  
                </div>
            </div>
        </div>
        <Footer className="bottom"></Footer>
    </div>
        
    )
}

export default Ageism