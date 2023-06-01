import NavigationBar from '../components/NavBar.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer.tsx';
import Chatbot from '../components/Chatbot.tsx'
import affinityBias from '../assets/affinityBias.png'
import haloBias from '../assets/haloBias.png'
import ageismBias from '../assets/ageism.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 0));
    } 

    useEffect(() => {
      AOS.init();
      someRequest().then(() => {
        const loaderElement = document.querySelector(".loader-container");
        if (loaderElement) {
          loaderElement.remove();
          setLoading(!isLoading);
        }
      });
    });

    return(
        <div className='container-fluid bg-light'>
           <Chatbot/>
           <NavigationBar/>
           <h3 className="text-center" style={{marginTop: '10%'}}>Register an account with us today to join the community, learn more about unconscious bias and get access to resources!</h3>
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
              <div className='desc-one row text-center' data-aos="fade-right" data-aos-delay="500">
                <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>What is Unconscious Bias?</h4>
                    <iframe width="500" height="315" 
                            src="https://www.youtube.com/embed/rbe5D3Yh43o" 
                            title="What is Unconscious Bias" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className="text-center">
                    </iframe>
                </div>
         
              </div>

            <div className='row text-center' style={{alignItems: 'center'}} data-aos="zoom-in-out" data-aos-delay="500">
              <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>Common Types of Unconscious Biases</h4>
                  <br/>
                  <div className='row' data-aos="fade-right" data-aos-delay="600">
                    <div className='col-sm-6 col-lg-4 text-center'>
                      Affinity bias
                      <div className='w-100 h-75 text-center'>
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to favor people who share similar interests, backgrounds, and experiences with us</p>
                      </div>
                    </div>
                    <div className='col col-sm-6 col-lg-4'>
                      Confirmation bias 
                      <div className='w-100 h-75 text-center'>
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to cherry-pick information that confirms our existing beliefs or ideas</p>
                      </div>
                    </div>
                    <div className='col col-sm-6 col-lg-4'>
                      The Halo Effect
                      <div className='w-100 h-75 text-center'>
                        <img src = {haloBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency for positive impressions of a person, company, country, brand, or product in one area to positively or negatively influence one's opinion or feelings in other areas</p>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div className='row text-center' data-aos="fade-right" data-aos-delay="600">
                    <div className='col col-sm-6 col-lg-4 text-center'>
                      Gender bias <br/>
                      <div className='w-100 h-75 text-center'>
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to favor people who share similar interests, backgrounds, and experiences with us</p>
                      </div>
                    </div>
                    <div className='col col-sm-6 col-lg-4'>
                      Ageism  
                      <div className='w-100 h-75 text-center'>
                        <img src = {ageismBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to favor people who share similar interests, backgrounds, and experiences with us</p>
                      </div>                   
                    </div>
                    <div className='col col-sm-6 col-lg-4'>
                     Beauty Bias
                    </div>
                  </div>
                  
                </div>
            </div>
            <br/>
            {/* <div className='row'>
              <div className='col'> */}
                {/* <blockquote>History and Science behind Unconscious Bias</blockquote>
                Over the last three decades, our understanding of unconscious bias has evolved. The nature of unconscious bias is well understood, and an instrument (Implicit Association Test) to assess unconscious bias has been developed and rigorously tested.

Here's what we know:

Unconscious biases develop at an early age: biases emerge during middle childhood and appear to develop across childhood (Dore, 2014).
Unconscious biases have real world effects on behavior (Dasgupta, 2004).
Unconscious biases are malleable-one can take steps to minimize the impact of unconscious bias (Dasgupta, 2013; Dasgupta & Greenwald, 2013).
A substantial amount of research has been published demonstrating impact of unconscious bias in various domains including the criminal justice system, education, and health/health care (Kirwan Institute, 2014). Bias may have an impact on: hiring, and mentoring and may contribute to healthcare disparities. */}
              {/* </div>
            </div>         */}
 
      <Footer/>
        </div>
    )
}
 
export default HomePage;