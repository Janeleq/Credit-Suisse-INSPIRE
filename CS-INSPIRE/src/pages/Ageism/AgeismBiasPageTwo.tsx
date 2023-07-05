import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import workplaceDynamics from "../../assets/ageism/workplaceDynamics.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCaretRight } from "react-icons/fa";
import femaleAvatar from "../../assets/ageism/femaleAvatar.svg"


function AgeismTwo() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showReflection, setShowReflection] = useState(false);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  function goNext() {
    navigate("/bias/ageismRoleplayCont", {
      state: { reflection: showReflection },
    });
  }

  useEffect(() => {
    AOS.init()
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  return (
    <div
      className="container-fluid p-0 bg-light"
      style={{ overflow: "hidden" }}
    >
      <NavigationBar />

      <div
        style={{
          marginTop: "5vh",
          height: "100vh",
          backgroundImage: `url(${workplaceDynamics})`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-2 roleplayDesc text-center w-75 mx-auto bg-dark text-light" data-aos="zoom-in" style={{opacity: 0.80}} >
          <h2 className="text-center mt-5 text-light" style={{fontSize: '2rem'}}>Scenario: Workplace Dynamics</h2>
        
          <p
            className="w-75 mx-auto text-light"
            style={{ borderRadius: "5px", padding: "5px", backgroundColor: '', fontWeight: '300', fontSize: '1.1rem', opacity: 1 }}
          >
            <img className="p-3" src= {femaleAvatar} alt="sarah" style={{width: '250px', height: '250px', float: 'left'}}/>
            You will assume the role of Sarah, a mid-level manager in a large
            corporation. <br/><br/>The goal is to navigate various workplace scenarios and
            address unconscious bias related to ageism. Your actions will shape
            the outcome of the simulation.
          </p>
          <br />
          <br />
          <h4 className="text-light" style={{fontSize: '1.6rem', fontWeight: 'lighter'}}>Act 1: Team Assignment</h4>
          <hr/>
          <p
            className="w-50 mx-auto text-light"
            style={{ borderRadius: "5px", padding: "10  px", backgroundColor: '', fontWeight: '300', fontSize: '1.15rem', opacity: 1 }}
          >
      
            You are tasked with building a new project team and you require a
            leader to lead the project. You have a few available candidates for
            choosing. <br/><br/>Proceed on to the next screen to view the candidates.
            <br />
            <br />
          </p>
          <br />
          <button className="btn">
            <NavLink
              className="bg-dark text-white p-3"
              style={{ textDecoration: "none", borderRadius: "5px" }}
              to="/bias/ageismRoleplayContOne"
            >
              Proceed <FaCaretRight/>
            </NavLink>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AgeismTwo;
