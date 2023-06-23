import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import workplaceDynamics from "../../assets/ageism/workplaceDynamics.jpg";
import { useNavigate, NavLink } from "react-router-dom";

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
      className="container-fluid bootdey p-0 bg-light"
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
        <div className="p-5 roleplayDesc text-center w-75 mx-auto">
          <h2 className="text-center mt-5" style={{fontSize: '2rem'}}>Scenario: Workplace Dynamics</h2>
          <p
            className="w-50 mx-auto text-dark"
            style={{ borderRadius: "5px", padding: "10px", backgroundColor: 'lightgrey', fontSize: '1.2rem' }}
          >
            You will assume the role of Sarah, a mid-level manager in a large
            corporation. The goal is to navigate various workplace scenarios and
            address unconscious bias related to ageism. Your actions will shape
            the outcome of the simulation.
          </p>
          <br />
          <br />
          <h4 style={{fontSize: '1.6rem'}}>Act 1: Team Assignment</h4>
          <p
            className="w-50 text-center mx-auto my-auto"
            style={{ borderRadius: "5px", padding: "10px", backgroundColor: 'lightgray', fontSize: '1.2rem' }}
          >
      
            You are tasked with building a new project team and you required a
            leader to lead the project. You have a few available candidates for
            choosing:
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
              Proceed
            </NavLink>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AgeismTwo;
