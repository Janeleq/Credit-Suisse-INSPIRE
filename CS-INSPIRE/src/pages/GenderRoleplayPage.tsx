import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'

function GenderRoleplay() {
    const [isLoading, setLoading] = useState(true);
  
  
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

    return (
        <div className="container-fluid bootdey">
            <NavigationBar/>
            <div className="row" style={{marginTop: '18vh'}}>
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Roleplaying</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Welcome to our Unconscious Bias Roleplay on <mark style={{fontWeight: 'bold'}}>Gender bias/Sexism</mark><br/>
                            You will be given a set of role and you are to play it through describing the set of actions you will carry out.
                            <br/><br/><br/>
                            <span className='mx-auto text-dark' style={{lineHeight: '2px'}}>In this roleplaying exercise, we aim to raise awareness about unconscious biases and their impact on our thoughts, actions, and decision-making processes. By simulating real-life scenarios, we can better understand and challenge our own biases while fostering empathy and promoting inclusivity.</span>
                        </p>
                </div>
                </div>
            </div>

        <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-3">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Alex Martin</h4>
                        <small className="text-muted">Employee</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-3">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Sarah Grace</h4>
                        <small className="text-muted">Employee</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
        
    )
}

export default GenderRoleplay