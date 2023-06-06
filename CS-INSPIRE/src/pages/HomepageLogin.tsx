import {useEffect, useState} from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import NavigationBarLogin from '../components/NavBarLogin.tsx';
import Chatbot from '../components/Chatbot.tsx'
import Footer from '../components/Footer.tsx';
import affinityBias from '../assets/affinityBias.png'
import haloBias from '../assets/haloBias.png'
import ageismBias from '../assets/ageism.jpg'
import sheryl from '../assets/sherylsandberg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePageLogin = () => {
    console.log("rendering lifecycle")
    const navigate = useNavigate();
 
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect (() => {
        if (location.state != null) {
            setEmail(location.state.email)
        }
        someRequest().then(() => {
            const loaderElement = document.querySelector(".loader-container");
            if (loaderElement) {
              loaderElement.remove();
              setLoading(!isLoading);
            }
          });
    }, [])

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1500));
    } 

    const handleLogout = () => {    
        console.log("function handlelogout called")           
        signOut(auth).then(() => {
        // Sign-out successful.
        if (confirm("Are you sure you want to sign out?") == true) {
                navigate("/login");
                alert("Signed out successfully!")
            }
        }).catch((error) => {
        // An error happened.
            alert("ERROR! Something went wrong when signing out.")
        });
    }
   
    return(
        <div className='container-fluid bg-light p-0 h-100 w-100' style={{}}>
           <NavigationBarLogin/>
           <Chatbot/>
           <div className='register text-center bg-light' style={{ overflow:' hidden'}}>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={sheryl} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={haloBias} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={ageismBias} alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            welcome home {email}
              <h4 className="text-center p-3" style={{textAlign: 'center'}}>
                Unravel the intricate workings of our minds and fostering a deeper understanding of the biases that shape our perceptions and actions.
              </h4>
              <button>Sign Up</button>
          

              <div className='intro row mt-3'>
                <p>Register an account with us today to join the community, learn more about unconscious bias and get access to resources!

                </p>
                  <section className="col" style={{backgroundColor: "#eee;"}}>
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col col-lg-9 col-xl-7">
                          <div className="" style={{border: 'none', borderRadius: "15px;"}} data-aos="zoom-in" data-aos-delay="500">
                            <div className="card-body p-5">
                              <figure className="text-center mb-0" style={{display: 'inline', backgroundColor: ''}}>
                                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                                    alt="Bulb" width="100" style={{display: 'inline'}}/>                          
                                    <blockquote className="blockquote" style={{}}>
                                      <p className="pb-3">
                                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                                        <span className="lead font-italic" style={{fontSize: '30px'}}>Our brain processes <b style={{color: 'grey'}}>50,000 - 70,000</b> pieces of information per day. <br/> But how many of them are we actually conscious of?</span>
                                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                                      </p>
                                    </blockquote>
                              </figure>
                              <br/><br/>
                              <figure className="text-center mb-0">
                                <blockquote className="blockquote">
                                  <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src={sheryl} alt="sheryl"/>
                                  <p className="pb-2">
                                    <i className="fas fa-quote-left fa-xs text-primary"></i>
                                    <span className="lead font-italic"> "None of us is immune to biases, whether conscious or unconscious. But by acknowledging them, we can work to overcome them."</span>
                                    <i className="fas fa-quote-right fa-xs text-primary"></i>
                                  </p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0">
                              Sheryl Sandberg
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

              <div className='row'>
                <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>The nature of unconscious bias</h4>
                  <p className='text-center w-50 mx-auto'>
                    Unconscious bias, often referred to as implicit bias, is a natural and inherent tendency of the human mind. It operates beyond our conscious awareness, shaping our perceptions, judgments, and decision-making processes. These biases are deeply rooted in societal influences, experiences, cultural conditioning, and media portrayals. They can manifest across various domains, including race, gender, age, physical appearance, socio-economic status, and more.
                  </p>
                </div>
              </div>


          
            <div className='row text-center' style={{alignItems: 'center'}} data-aos="zoom-in-out" data-aos-delay="500">
             
              <div className='col'>
                  <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>Common Types of Unconscious Biases</h4>
                  <p className='text-center w-50 mx-auto' style={{display: 'block', margin: 'auto' }}>There are various types of unconscious biases that we need to examine and understand. These include, but are not limited to, confirmation bias, affinity bias, halo effect, beauty bias, ageism, and stereotypes. Each bias contributes to distorted perceptions and can influence our attitudes and behaviors towards individuals or groups.</p>
                  <br/>
                  <div className='row text-center mx-auto' data-aos="fade-right" data-aos-delay="600">
                    <div className='col-sm-6 col-lg-4'>
                      <div className='w-75 h-75 text-center'>
                      Affinity bias
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to favor people who share similar interests, backgrounds, and experiences with us</p>
                      </div>
                    </div>
                    <div className='col-sm-6 col-lg-4 mx-auto'>
                      <div className='w-75 h-75 text-center'>
                      Confirmation bias 
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to cherry-pick information that confirms our existing beliefs or ideas</p>
                      </div>
                    </div>
                    <div className='col-sm-6 col-lg-4'>
                      <div className='w-75 h-75 text-center'>
                      The Halo Effect
                        <img src = {haloBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency for positive impressions of a person, company, country, brand, or product in one area to positively or negatively influence one's opinion or feelings in other areas</p>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div className='row text-center' data-aos="fade-right" data-aos-delay="600">
                    <div className='col col-sm-6 col-lg-4 text-center'>
                      Gender bias <br/>
                      <div className='w-75 h-75 text-center'>
                        <img src = {affinityBias} className='w-75 h-75'/>
                        <p className='w-75' style={{marginLeft: '12%'}}>The tendency to favor people who share similar interests, backgrounds, and experiences with us</p>
                      </div>
                    </div>
                    <div className='col col-sm-6 col-lg-4'>
                      Ageism  
                      <div className='w-75 h-75 text-center'>
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

            <div className='row'>
              <div className='col-12 col-md-6' data-aos="zoom-in-right" data-aos-delay="300">
                <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>Developing Awareness and Mitigating Unconscious Bias</h4>
                  <p className='text-center w-50 mx-auto' style={{display: 'block', margin: 'auto' }}>The first step in addressing unconscious bias is to develop awareness. Recognizing that biases exist within us is essential for growth and change. Self-reflection, education, and engaging in open conversations are effective ways to unveil our unconscious biases. It is crucial to challenge our assumptions, question our judgments, and actively seek out diverse perspectives.</p>
              </div>
              <div className='col-12 col-md-6' data-aos="zoom-in-left" data-aos-delay="300">
                <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>The Role of Education and Continuous Learning</h4>
                  <p className='text-center w-50 mx-auto' style={{display: 'block', margin: 'auto' }}>Education plays a pivotal role in combating unconscious bias. By integrating discussions on bias and diversity into educational curricula, we can raise awareness from an early age. Furthermore, providing resources, workshops, and training programs for individuals and organizations can equip them with the tools and knowledge to navigate biases and promote inclusivity effectively.</p>
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
      <div className='row'>
        <div className='col w-50 text-center' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
        <h4 className='text-uppercase' style={{fontWeight: 'bolder', marginTop: '10%'}}>Food for thought</h4>
            <p className='w-50 text-center mx-auto'>
              As we embark on this journey of uncovering unconscious bias, let us remember that awareness is the catalyst for transformation. By acknowledging our biases, engaging in self-reflection, and embracing diversity, we can cultivate an environment that values the worth and contributions of every individual. Let us work together to challenge unconscious bias, foster inclusivity, and build a world where fairness and equity thrive.
            </p>
        </div>
      </div>
           </div>
           <Footer/>
      </div>
    )
}
 
export default HomePageLogin;