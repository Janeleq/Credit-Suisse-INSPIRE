import'../../styles/_ageism.css'
import React, {useState, useEffect, ChangeEvent} from 'react';
import NavigationBar from '../../components/NavBarLogin'
import Footer from '../../components/Footer';
import collegeBackground from '../../assets/collegeApplicationBackground.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa';
import maleIcon from "../../assets/haloEffect/maleAvatar.svg"

function HaloEffectRoleplay() {
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showReflection, setShowReflection] = useState(false)
    

    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
    } 

    function goNext() {
        navigate("/bias/ageismRoleplayCont", {state: {reflection: showReflection}})
    }





    return (
    //     <div className="container-fluid bootdey p-0 bg-light" style={{overflow: 'hidden'}}>
    //         <NavigationBar/>

    //     <div style={{marginTop: '9vh', height: '100vh', backgroundImage: `url(${collegeBackground})`, backgroundSize: 'cover', opacity: 0.8}}>
           
    //         <div className='p-5 roleplayDesc text-center w-75 mx-auto' style={{color: 'rgba(0, 0, 0, 1)' }}>

    //             <h2 className='text-center mt-5'>Scenario: College Admissions</h2>
    //             <p className='w-50 mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You will assume the role of Alex, a college admissions officer responsible for evaluating applicants. The goal is to navigate the admissions process while being aware of and challenging the halo effect bias.Your actions will shape the outcome of the simulation.</p>
    //             <br/><br/>
    //             <h4 style={{opacity: 1}}>Act 1: Reviewing Applications</h4>
    //             <p className='w-50 text-center mx-auto' style={{borderRadius: '5px', padding: '10px'}}>You have a stack of college applications to review.<br/><br/>     
    //             </p><br/>
    //                 <NavLink to= "/bias/haloEffectRoleplayContOne">Proceed</NavLink>
    //         </div>
    //     </div>
           
           
      
    //     <Footer/>
    // </div>
    <div
    className="container-fluid p-0 bg-light"
    style={{ overflow: "hidden" }}
  >
    <NavigationBar />

    <div
      style={{
        marginTop: "5vh",
        height: "100vh",
        backgroundImage: `url(${collegeBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-2 roleplayDesc text-center w-75 mx-auto bg-dark text-light" data-aos="zoom-in" style={{opacity: 0.80}} >
        <h2 className="text-center mt-5 text-light" style={{fontSize: '2rem'}}>Scenario: College Admissions</h2>
      
        <p
          className="w-75 mx-auto text-light"
          style={{ borderRadius: "5px", padding: "5px", backgroundColor: '', fontWeight: '300', fontSize: '1.1rem', opacity: 1 }}
        >
          <img src={maleIcon} alt="sarah" style={{width: '250px', height: '250px', float: 'left'}}/>
          You will assume the role of Alex, a college admissions officer responsible for evaluating applicants. The goal is to navigate the admissions process while being aware of and challenging the halo effect bias. Your actions will shape the outcome of the simulation.
        </p>
        <br />
        <br />
        <h4 className="text-light" style={{fontSize: '1.6rem', fontWeight: 'lighter'}}>Reviewing Applications</h4>
        <hr/>
        <p
          className="w-50 mx-auto text-light"
          style={{ borderRadius: "5px", padding: "10  px", backgroundColor: '', fontWeight: '300', fontSize: '1.15rem', opacity: 1 }}
        >
    
          You are tasked with reviewing the present applicants at hand and you are being handed a stack of college applications to review. You have numerous applications to look through
          <br/><br/>Proceed on to the next screen to view the candidates.
          <br />
          <br />
        </p>
        <br />
        <button className="btn">
          <NavLink
            className="bg-dark text-white p-3"
            style={{ textDecoration: "none", borderRadius: "5px" }}
            to="/bias/haloEffectRoleplayContOne"
          >
            Proceed <FaCaretRight/>
          </NavLink>
        </button>
      </div>
    </div>

    <Footer />
  </div>
    


        
    )
}

export default HaloEffectRoleplay