import'../../styles/_ageism.css'
import React, {useRef, useState, useEffect, useMemo, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import action from '../../assets/action.png'
import reflectionIcon from '../../assets/reflectionIcon.png'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import backArrow from '../assets/arrowBack.png'
import readingIcon from '../../assets/haloEffect/meticulouslyRead.png'

function BeautyBiasTwo() {
    const [showReflection, setShowReflection] = useState(false)
    const [reflection, setReflection] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [candidate, setAction] = useState('')
    const [chosenDesc, setChosenDesc] = useState('')
    let isValid = React.useMemo(() => reflection.length <= 20, [reflection]);

    const ref = useRef<HTMLTextAreaElement>(null);
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
        setAction(param[0]) ;
        setChosenDesc(param[1])
    
    };

    const handleReflectionChange = () => {
        setReflection(ref.current.value)
        navigate("/bias/HaloEffectRoleplayContTwo", {state: {reflection: reflection, action: candidate, chosenDesc: chosenDesc}})
    }



    return (
        <div className='container-fluid p-0'>
            <NavigationBar/>
            
            
            <div className="row bg-light mx-auto text-center" style={{marginTop: '8vh'}}>
            {/* <NavLink to="/bias/ageismRolePlay"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}
                <h3 className='text-center mt-3'>Action 1: Initial Impressions</h3>
                <p className=''>Below are 2 actions you can carry out.</p>
                <br/>
                <p className='lead mt-4'><img src={action} alt="action" style={{width: '3%'}}/>&nbsp;Choose what you want to do with the stack of application at hand.</p>
                
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => (handleCandidate(event, ['Action 1', "You have chosen to take some time out to read through each application meticulously by considering each applicant's external achievements."]))}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src={readingIcon} className="h-50 w-50 img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Read each application thoroughly, considering academic achievements and extracurricular activities.</h4>
                            <small className="text-muted">Employee 1<br/>
                            Age: 35 years old
                            </small>
                            <br/><br/>
            
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" onClick={event => (handleCandidate(event, ['Action 2', 'You have chosen to make do with the applications, by glancing at the names and making quick judgements.']))}>
                    <div className="team text-center rounded p-3 py-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Glance at the names and make quick judgments based on reputation or popularity.</h4>
                            <small className="text-muted">Employee 2<br/>
                            Age: 23 years old
                            </small>
                
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

export default BeautyBiasTwo; 