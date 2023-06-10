import'../styles/_ageism.css'
import React, {useRef, useState, useEffect, useMemo, ChangeEvent} from 'react';
import NavigationBar from '../components/NavBarLogin'
import Footer from '../components/Footer';
import useSound from "use-sound"
import exp from '../assets/experience.jpg'
import respected from '../assets/respected.jpg'
import energetic from '../assets/energetic.png'
import trackRecord from '../assets/trackRecord.png'
import perspective from '../assets/perspective.png'
import action from '../assets/action.png'
import workplaceDynamics from '../assets/workplaceDynamics.jpg'
import reflectionIcon from '../assets/reflectionIcon.png'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import backArrow from '../assets/arrowBack.png'

function AgeismThree() {
    const [showReflection, setShowReflection] = useState(false)
    const [reflection, setReflection] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [candidate, setCandidate] = useState('')
    const [chosenDesc, setChosenDesc] = useState('')
    let isValid = React.useMemo(() => reflection.length <= 20, [reflection]);

    const ref = useRef('null');
    const navigate = useNavigate();

    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 0 ));
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

    const Reflection = () => (
        <div className='reflection text-center'>
            <div className='reflectiontitle mb-2'>
                <p className='text-muted'>{chosenDesc}</p>
                <img style={{width: '2%'}} src={reflectionIcon} alt="Reflection"/>&nbsp;
                <span className='mb-2'> Reflection: Why did you choose {candidate}?</span><br/>
            </div>
                <textarea ref={ref} 
                    className="text-dark bg-light" 
                    cols={40} rows={5}
                    validationState= {isValid ? 'valid' : 'invalid'}
                    
                    />
            
            <br/>
            <button className='' onClick={handleReflectionChange}>Proceed</button>
        </div>
    )

    const showReflectionError = () => (
        <div className='reflection-error'>
             <div className='reflectiontitle mb-2'>
                <span className='mb-2'> Enter a longer reflection text!</span><br/>
            </div>
        </div>
    )


    const handleCandidate = (event, param) => {
        console.log(event);
        console.log(param);
        setShowReflection(true);
        setCandidate(param[0]) ;
        setChosenDesc(param[1])
    
    };

    const handleReflectionChange = () => {
        setReflection(ref.current.value)
        navigate("/bias/ageismRoleplayContTwo", {state: {reflection: reflection, candidate: candidate}})
    }



    return (
        <div className='container-fluid p-0'>
            <NavigationBar/>
            
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
            <NavLink to="/bias/ageismRolePlay"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink>
                <h3 className='text-center mt-3'>Available Candidates</h3>
                <p className=''>Below are 3 candidates in the company with different traits.</p>
                <br/>
                <p className='lead mt-4'><img src={action} alt="action" style={{width: '3%'}}/>&nbsp;Choose the candidate of your choosing.</p>
                
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => (handleCandidate(event, ['John', 'You have chosen John for his diverse perspectives.']), Reflection)}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">John Martin</h4>
                            <small className="text-muted">Employee 1<br/>
                            Age: 35 years old
                            </small>
                            <br/><br/>
                            <p style={{textDecoration: 'underline', margin: '0'}}>Traits</p>
                                <span style={{textDecoration: 'none'}}>
                                Known for their ability to bring diverse perspectives to the table.
                                </span>
                    
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><img src={perspective} alt="perspective"/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
            
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => (handleCandidate(event, ['Emma', 'You have chosen Emma for her innovative thinking and energy.']), Reflection)}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Emma Carlo</h4>
                            <small className="text-muted">Employee 2<br/>
                            Age: 23 years old
                            </small><br/><br/>
                            <p style={{textDecoration: 'underline', margin: '0'}}>Traits</p>
                                <span style={{textDecoration: 'none'}}>
                                Energetic and innovative, with a strong track record.
                                </span>
                        
                            <br/>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><img src={energetic} alt="energetic"/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><img src={trackRecord} alt="track record"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" onClick={event => handleCandidate(event, ['Alex', "You have chosen Alex for his experience and expertise."])}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Alex Murphy</h4>
                            <small className="text-muted">Employee 3<br/>
                            Age: 51 years old
                            </small>
                            <br/><br/>
                            <p style={{textDecoration: 'underline', margin: '0'}}>Traits</p>
                                <span style={{textDecoration: 'none'}}>
                                Highly experienced and respected in the field.
                                </span>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><img src={exp} alt="experience"/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><img src={respected} alt="respected"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <p className='lead bg-light mt-4'>
                    { showReflection ? <Reflection /> : null}
                    { showReflectionError ? <showReflectionError /> : null}
                </p>
            
                </div>
                <Footer/>
        </div>
    
    )
}

export default AgeismThree; 