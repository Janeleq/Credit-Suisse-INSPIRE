import NavigationBar from '../components/NavBar.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer.tsx';

const HomePage = () => {

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 0));
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

    return(
        <div className='container-fluid'>
           <NavigationBar/>
           <h3 className="text-center" style={{marginTop: '10%'}}>Register an account with us today to learn more about unconscious bias and get access to resources!</h3>
           <button>Sign Up</button>
            <div className='intro row'>
                <section className="col" style={{backgroundColor: "#eee;"}}>
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col col-lg-9 col-xl-7">
                        <div className="card" style={{border: 'none', borderRadius: "15px;"}}>
                          <div className="card-body p-5">

                            <div className="text-center mb-4 pb-2">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                                alt="Bulb" width="100"/>
                            </div>

                            <figure className="text-center mb-0">
                              <blockquote className="blockquote">
                                <p className="pb-3">
                                  <i className="fas fa-quote-left fa-xs text-primary"></i>
                                  <span className="lead font-italic">Many of life's failures are people who did not realize how
                                    close they were to success when they gave up.</span>
                                  <i className="fas fa-quote-right fa-xs text-primary"></i>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer mb-0">
                                Thomas Edison
                              </figcaption>
                            </figure>

                          </div>
                        </div>
                      </div>
                    </div>
                  
                </section>
            </div>
              <div className='desc-one row text-center'>
                <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder'}}>What is Unconscious Bias?</h4>
                    <iframe width="500" height="315" 
                            src="https://www.youtube.com/embed/rbe5D3Yh43o" 
                            title="What is Unconscious Bias" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className="text-center">
                    </iframe>
                </div>
                <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder'}}>Common Types of Unconscious Biases</h4>
                  <ul>
                    <li>Affinity bias</li>
                    <li>Confirmation bias</li>
                    <li>The halo effect</li>
                    <li>Gender bias</li>
                    <li>Ageism</li>
                    <li>Name bias</li>
                    <li>Beauty bias</li>
                    <li>Authority bias</li>
                  </ul>
                </div>
         
              </div>
              
            <div className='row'>
              <div className='col'>
                <blockquote>History and Science behind Unconscious Bias</blockquote>
                Over the last three decades, our understanding of unconscious bias has evolved. The nature of unconscious bias is well understood, and an instrument (Implicit Association Test) to assess unconscious bias has been developed and rigorously tested.

Here's what we know:

Unconscious biases develop at an early age: biases emerge during middle childhood and appear to develop across childhood (Dore, 2014).
Unconscious biases have real world effects on behavior (Dasgupta, 2004).
Unconscious biases are malleable-one can take steps to minimize the impact of unconscious bias (Dasgupta, 2013; Dasgupta & Greenwald, 2013).
A substantial amount of research has been published demonstrating impact of unconscious bias in various domains including the criminal justice system, education, and health/health care (Kirwan Institute, 2014). Bias may have an impact on: hiring, and mentoring and may contribute to healthcare disparities.
              </div>
            </div>        
 
      <Footer/>
        </div>
    )
}
 
export default HomePage;