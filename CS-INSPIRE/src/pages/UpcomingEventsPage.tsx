import { useState, useEffect, useCallback } from 'react';
import Chatbot from '../components/Chatbot.tsx'
import NavigationBar from '../components/NavBarLogin.tsx';
import Footer from '../components/Footer.tsx';
import '../styles/_community.css'
import valerie from '../assets/valerie.jpg'
import anurag from '../assets/anurag.jpg'
import jennifer from '../assets/jennifer.jpg'
import tim from '../assets/tim.jfif'
import communityBg from '../assets/communityBg.png'

function Community() {
    const [isLoading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
  
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

     

    return (
        <div className="event container-fluid p-0" style={{overflow: 'hidden'}}>
            <NavigationBar/>
            <div className="mb-5 bg-white" style={{marginTop: '9vh'}}>
                <div className='' style={{height: '75vh', width: '100vw', opacity: 0.8, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${communityBg})`}}>
                    <h4 className="text-center text-white lead" style={{paddingTop: '200px'}}> See what is happening in the community!</h4>
                    </div>
                <div className="row">
                    <div className="col-lg-12 ">
                        <nav className="wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link" href="/community" id="nav-home-tab" data-toggle="tab" role="tab" aria-selected="true">
                                    <div className="nav-content">
                                        <strong>Happening now</strong>
                                        <span>{(new Date()).toString().substring(0,10)}</span>
                                    </div>
                                </a>
                                <a className="nav-item nav-link  active show" id="nav-profile-tab" data-toggle="tab" href="/community/upcomingevents" role="tab" aria-selected="false">
                                    <div className="nav-content">
                                        <strong>Upcoming</strong>
                                        {/* <span>{new Date().getDate().toString().substring(0,10)+1}</span> */}
                                        <span>Events coming up</span>
                                    </div>
                                </a>
                            </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0 wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" id="nav-tabContent" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                            <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="nav-home-tab">
                      
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src={tim} alt="Tim Urban"/>
                                                <h5>Tim Urban</h5>
                                                <p>TED Talk Media Speaker</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2 className='text-dark'>What is Unconscious Bias and Priviledge</h2>
                                            <p>Can we all just get along? There's hope for harmony in our divided world, as long as we can shift the way we think. </p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-ban"></i></div>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        
                        </div>
                    </div>
                 
                </div>
                <Footer/>
            </div>
           
        </div>
    )
}

export default Community