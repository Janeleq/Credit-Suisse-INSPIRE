import { useState, useEffect, useCallback } from 'react';
import Chatbot from '../components/Chatbot.tsx'
import NavigationBar from '../components/NavBarLogin.tsx';
import Footer from '../components/Footer.tsx';
import '../styles/_community.css'
import valerie from '../assets/valerie.jpg'
import anurag from '../assets/anurag.jpg'
import jennifer from '../assets/jennifer.jpg'
import tim from '../assets/tim.jfif'

function Community() {
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

    return (
        <div className="event container-fluid bg-light p-0" style={{overflow: 'hidden'}}>
            <NavigationBar/>
            <div className="mb-5" style={{marginTop: '18vh'}}>
                <div className="row">
                    <div className="col-lg-12 ">
                        <nav className="wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active show" id="nav-home-tab" data-toggle="tab" href="#one" role="tab" aria-selected="true">
                                    <div className="nav-content">
                                        <strong>First Day</strong>
                                        <span>10th January 2019</span>
                                    </div>
                                </a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#two" role="tab" aria-selected="false">
                                    <div className="nav-content">
                                        <strong>Second Day</strong>
                                        <span>10th January 2019</span>
                                    </div>
                                </a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#three" role="tab" aria-selected="false">
                                    <div className="nav-content">
                                        <strong>Third Day</strong>
                                        <span>10th January 2019</span>
                                    </div>
                                </a>
                                <a className="nav-item nav-link" id="nav-contact-tab2" data-toggle="tab" href="#four" role="tab" aria-selected="false">
                                    <div className="nav-content">
                                        <strong>Fourth Day</strong>
                                        <span>10th January 2019</span>
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
                                                <img src={valerie} alt="Valerie Alexandar   "/>
                                                <h5>Valerie Alexandar</h5>
                                                <p>Author, spaker & CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                        <a className="btn btn-primary btn-floating p-1" style={{color: '#084298', backgroundColor: "#0082ca"}} href="#!" role="button">Online Talk</a>
                                            <div className="alert alert-primary p-1" style={{display: 'inline'}} role="alert">Gender Bias Talk</div>
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li>Waterfront Hotel, London</li>
                                                <li>9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>How to Outsmart Your Own Unconscious Bias</h2>
                                            <p>The human brain is a remarkable achievement in evolution. Unfortunately, the brain activity that kept the human species alive for millions of years is the same brain activity that keeps us from achieving equality today.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src={anurag} alt="Anurag Gupta"/>
                                                <h5>Anurag Gupta</h5>
                                                <p>Entreprenaur, Mindfulness teacher</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>What we can save by breaking unconscious bias</h2>
                                            <p>What are the economic, social, and emotional costs of unconscious bias?</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-magic"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src={jennifer} alt="Jennifer Witter"/>
                                                <h5>Jennifer Witter</h5>
                                                <p>Writer </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>How Prejudiced Are You: Recognising and Combating Unconscious Bias</h2>
                                            <p>Overt racism is easy to identify. But what about unconscious bias – soft prejudices that we all have, but of which we are basically unaware? In today’s heated social and global climate, this lack of awareness can deeply impact your professional and personal life, as well as the way you unintentionally communicate and think. It can even have serious economic ramifications. This provocative talk will take a deep dive into the subject, where you will confront your own biases and see how you – regardless of race, status, income or education – have been a victim of unconscious bias.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="far fa-cogs"></i> </div>
                                        </div>
                                    </div>
                                </div>
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
                                            <h2>What is Unconscious Bias and Priviledge</h2>
                                            <p>Can we all just get along? There's hope for harmony in our divided world, as long as we can shift the way we think. </p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-ban"></i></div>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                            <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img"/>
                                                <h5>Rosalina William</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>UX Design Trend Party 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img"/>
                                                <h5>Kelian M. Bappe</h5>
                                                <p>youtubing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Rokolo DJ Dancing 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img"/>
                                                <h5>Hiliniam Nelson</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Google Youtube Stratigic Party</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img"/>
                                                <h5>Kimjing J. Jalim</h5>
                                                <p>UX Deisgn</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Intro Jiknim Jikis 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img"/>
                                                <h5>Rosalina William</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>UX Design Trend Party 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img"/>
                                                <h5>Kelian M. Bappe</h5>
                                                <p>youtubing</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Rokolo DJ Dancing 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img"/>
                                                <h5>Hiliniam Nelson</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Google Youtube Stratigic Party</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img"/>
                                                <h5>Kimjing J. Jalim</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Intro Jiknim Jikis 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="tab-pane fade" id="four" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="img"/>
                                                <h5>Rosalina William</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>UX Design Trend Party 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="img"/>
                                                <h5>Kelian M. Bappe</h5>
                                                <p>youtubing</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Rokolo DJ Dancing 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="img"/>
                                                <h5>Hiliniam Nelson</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Google Youtube Stratigic Party</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-lg-2">
                                        <div className="user">
                                            <div className="title">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="img"/>
                                                <h5>Kimjing J. Jalim</h5>
                                                <p>UX Deisgn</p>
                                            </div>
                                            <ul>
                                                <li><i className="fal fa-coffee"></i> Coffe &amp; Snacks</li>
                                                <li><i className="fal fa-video"></i> Video Streming</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="event-list-content fix">
                                            <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className="">
                                                <li><i className="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                                <li><i className="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                            </ul>
                                            <h2>Intro Jiknim Jikis 2019</h2>
                                            <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                            <a href="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt"></i> Buy Ticket</a>
                                            <a href="#" className="btn mt-20">Read More</a>
                                            <div className="crical"><i className="fal fa-video"></i> </div>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 justify-content-center text-center">
                        <a href="#" className="btn mt-20 mr-10">More Program  +</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Community