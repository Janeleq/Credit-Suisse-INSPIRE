import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'
import useSound from "use-sound"

function AgeismTwo() {
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

        <div style={{marginTop: '18vh'}}>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title">Question 1:</h5>
                    <p className="card-text">What is the capital of France?</p>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="question1" id="q1Option1" value="option1"/>
                    <label className="form-check-label" for="q1Option1">a) London</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="question1" id="q1Option2" value="option2"/>
                    <label className="form-check-label" for="q1Option2">b) Paris</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="question1" id="q1Option3" value="option3"/>
                    <label className="form-check-label" for="q1Option3">c) Rome</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Lisa Martin</h4>
                        <small className="text-muted">Founder</small>
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
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Calvin Carlo</h4>
                        <small className="text-muted">C.E.O.</small>
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
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Richha Jotchi</h4>
                        <small className="text-muted">Manager</small>
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
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Cristino Murfy</h4>
                        <small className="text-muted">Accountant</small>
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

export default AgeismTwo