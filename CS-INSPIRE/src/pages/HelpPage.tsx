import { useState, useEffect, useRef } from "react";
// import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import NavigationBar from "../components/NavBarLogin";
import Chatbot from "../components/Chatbot"
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function HelpPage() {
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

   
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
        emailjs.sendForm('service_jrq7mcs', 'template_ecaf8aq', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            // show the user a success message
        }, (error) => {
            // show the user an error
        });
    };  


    return (
        <div className="container-fluid p-0" style={{backgroundColor: '#808080'}}>
            <Chatbot/>  
            <NavigationBar/>
            <section style={{marginTop: '18vh'}} className="section">
        
            <div className="row">
                 <div className="col-lx-12 p-0">
                    <div className="card" style={{border: 'none'}}>
                        <div className="card-body mb-5">
                            <div className="row justify-content-center mt-4">
                                <div className="col-xl-5 col-lg-8">
                                    <div className="text-center">
                                        <h3 className="text-dark">Frequently Asked Questions?</h3>
                                        <p className="text-muted">Check out some of the FAQs below that are commonly answered</p>
                                        <div>
                                            <button type="button" className="btn btn-primary me-2" onClick={sendEmail}>Email Us</button>
                                            {/* <button type="button" className="btn btn-success">Send us a tweet</button> */}
                                        </div>
                                    </div>
                                </div>     
                            </div>
               <div className="bg-light m-3 row justify-content-center mt-5">
                    <div className="col-9">
                        <ul className="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-genarel-tab" data-bs-toggle="pill" data-bs-target="#pills-genarel" type="button" role="tab" aria-controls="pills-genarel" aria-selected="true">
                                    <span className="font-size-16">General Questions</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-privacy_policy-tab" data-bs-toggle="pill" data-bs-target="#pills-privacy_policy" type="button" role="tab" aria-controls="pills-privacy_policy" aria-selected="false">
                                    <span className="font-size-16">Privacy Policy</span>
                                </button>
                              </li>
                          </ul>
                    </div>
                    <div className="col-lg-9" data-aos="flip-up" data-aos-delay="300">
                        <div className="tab-content pt-3" id="pills-tabContent">
                            <div className="tab-pane fade active show" id="pills-genarel" role="tabpanel" aria-labelledby="pills-genarel-tab">
                                <div className="row g-4 mt-2">
                                    <div className="col-lg-6">
                                        <h5 className="text-dark">What is this platform about?</h5>
                                    <p className="text-dark text-muted">Perception Pause is a platform that spreads awareness regarding to unconscious bias.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="text-dark">Why do we use it ?</h5>
                                        <p className="text-dark text-muted">Utilise the provided resources so gain insights towards today's various unconscious bias and potentially counter them.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="text-dark">Where does it come from ?</h5>
                                    <p className="text-dark text-muted">If several languages coalesce, the grammar of the resulting language is more simple 
                                        and regular than that of the individual languages. The new common language will be more simple and 
                                        regular than the existing
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="text-dark">Where can I get some?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more 
                                            simple and regular than that of the individual languages. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-privacy_policy" role="tabpanel" aria-labelledby="pills-privacy_policy-tab">
                                <div className="row g-4 mt-2">
                                    <div className="col-lg-6">
                                        <h5>Where does it come from ?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>                                      
                                    <div className="col-lg-6">
                                        <h5>What is Perception Pause privacy policy</h5>
                                        <p className="lg-base">Perception Pause do not hold any data and all user records remains strictly confidential.</p>
                                    </div>
                                </div>
                            </div>

                          </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
            </section>
            <Footer/>
        </div>

    )
};

export default HelpPage;