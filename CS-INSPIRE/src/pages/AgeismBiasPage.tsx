import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';

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

    return (
        <div className="container-fluid bootdey p-0">
            <NavigationBar/>
        <div className="row" style={{marginTop: '18vh'}}>
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">Unconscious Bias: <mark>Ageism</mark></h4>
                    <p className="text-muted para-desc mx-auto mb-0">
                    Ageism refers to the stereotypes, prejudices, and discrimination based on a person's age. It can manifest in various ways, such as assumptions about capabilities, intellect, or relevance solely based on someone's age. Unfortunately, these biases can influence our perceptions and judgments without our conscious awareness.
                    <br/><br/>
                    We recognize that ageism can have far-reaching consequences in society, affecting employment opportunities, healthcare access, and interpersonal relationships.
                    </p>
                    <br/><br/>
                    <button type="" onClick={AgeismRoleplay}>Start</button>
                </div>
            </div>
        </div>
        <Footer className="bottom"></Footer>
    </div>
        
    )
}

export default Ageism