import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import outcomeIcon from "../../assets/outcomeIcon.png";
import actionIcon from "../../assets/action.png"
import trainingBg from "../../assets/trainingAndDevelopmentBg.png";
import importanceIcon from "../../assets/ageism/dismissImportanceIcon.png";
import liaseIcon from "../../assets/ageism/liaseIcon.svg";
import trainingIcon from "../../assets/ageism/trainingIcon.svg";
import outcomeBg from "../../assets/outcomeBg.svg";
import pastelGreyBg from "../../assets/pastelGreyBg.png";
import { FaBookReader } from "react-icons/fa";

function AgeismFive() {
  const { state } = useLocation();
  // const {reflection} = state.reflection;

  const action = state.action;
  const [candidate, setCandidate] = useState("");
  const [reflection, setReflection] = useState("");
  const [descOutcome, setDescOutcome] = useState("");
  const [nextDesc, setNextChosenDesc] = useState(""); // data passed to the next page
  const [isLoading, setLoading] = useState(true);
  const [favorable, setFavorable] = useState("");
  const [noActionFavorable, setNoActionsFavorable] = useState(0);
  const navigate = useNavigate();

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // setNoActionsFavorable(state.noFavorable);
    setCandidate(state.candidate);
    setReflection(state.reflection);
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  useEffect(() => {
    if (action == 1) {
      setDescOutcome(
        "😊 Mediating and encouraging open dialogue fosters understanding and collaboration."
      );
      setFavorable("✔️ Favorable");
      // noActionFavorable += 1
    } else if (action == 2) {
      setDescOutcome(
        "😔 Siding with one team member based on personal bias exacerbates age-related conflicts."
      );
      setFavorable("❌ Not favorable");
    } else {
      setDescOutcome(
        "😔 Ignoring the conflict allows it to escalate and negatively impact team dynamics."
      );
      setFavorable("❌ Not favorable");
    }
    if (favorable == "✔️ Favorable") {
      setNoActionsFavorable(state.noFavorable + 1)
      console.log(noActionFavorable)
    }

    else {
      setNoActionsFavorable(state.noFavorable)
    }
  });

  const handleChoice = (event, param) => {
    console.log(event);
    console.log(param);
    setNextChosenDesc(param);
  };

  const Proceed = () => {
    if (nextDesc) {
      navigate("/bias/ageismRoleplayContFour", {
        state: {
          outcome: nextDesc,
          candidate: candidate,
          reflection: reflection,
          noFavorable: noActionFavorable,
        },
      });
    } else {
      alert("Please pick an action for the current scenario!");
    }
  };

  return (
    <div
      className="container-fluid p-0 bg-light"
      style={{ overflow: "hidden" }}
    >
      <NavigationBar />

      <div
        className="row bg-light mx-auto text-center"
        style={{ marginTop: "", backgroundImage: `url(${pastelGreyBg})` }}
      >        
      <div
      className=""
      style={{
        backgroundImage: `url(${pastelGreyBg})`,
        borderBottom: "1px solid grey",
      }}
    >
      <img
        src={outcomeBg}
        style={{ width: "500px", height: "500px", float: "left" }}
      />
        {/* <NavLink to="/bias/ageismRolePlayContThree"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

        <h3 className="" style={{ marginTop: "20vh" }}>
          <img src={outcomeIcon} alt="outcome" style={{ width: "3%" }} /> &nbsp;
          Outcome / Consequence of your action
          <br />
          <span className="text-muted" style={{ marginLeft: "-2%" }}>
            {favorable}
          </span>
        </h3>
        <p style={{fontSize: '1.2rem'}}>{descOutcome}</p>
      </div>
        <div
          className="p-5"
          style={{
            height: "80vh",
            backgroundImage: `url(${trainingBg})`,
            backgroundSize: "cover",
            
          }}
        >
          <div className="desc bg-dark" style={{ borderRadius: "5px", padding: "10px", backgroundColor: '', fontWeight: '300', fontSize: '1.15rem', opacity: 0.8 }} >
          <h4 style={{ fontSize: "1.6rem", borderBottom: "solid 1px grey", color: 'whitesmoke', fontWeight: 'lighter' }}>
            Act 3: Training and Development
          </h4>
          <hr/>
          <p
            className="w-50 mx-auto text-light p-2"
            style={{ fontSize: "1.2rem", borderRadius: "5px" }}
          >
            It is now weeks past the project and you feel like the team could
            have some further training and development to further their
            skillsets to excel in the project. As such, you look to the various
            training programs offered by the company to enhance employee skills.{" "}
            <br/><br/>
            <FaBookReader/>&nbsp;
            After looking through quite some time, you found a unique training
            program that you think would suit the employees well. However, there
            is only two opportunity slots for this training program, but you
            realise that you have 3 employees at hand.
            <br/><br/>  
            As the manager, what would you do?
          </p>
          </div>
        </div>
        <p className="lead mt-4">
          <img src={actionIcon} alt="action" style={{ width: "3%" }} />
          &nbsp;Choose your next action.
        </p>  

        <div
          className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          onClick={(event) =>
            handleChoice(event, [
              1,
              "You have chosen to made the effort to liase with the top management to open more slots for the training program and encourage all team members to attend the training sessions.",
              "Encouraging all team members to attend training promotes equality and growth.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 py-4 w-75 h-75 mx-auto">
            <img
              src={liaseIcon}
              style={{ width: "279px", height: "279px" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt="liase with top management"
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 1</h4>
              <small className="text-muted">
                Liase with the top management to open more slots for the
                training program and encourage all team members to attend the
                training sessions.
                <br />
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          onClick={(event) =>
            handleChoice(event, [
              2,
              "You have chosen to suggest training only to the younger team members.",
              "Suggesting training only to younger team members perpetuates age-related biases.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={trainingIcon}
              style={{ width: "279px", height: "279px", borderRadius: "45%" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt="dismiss importance"
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 2</h4>
              <small className="text-muted">
                Suggest training only to younger team members.
                <br />
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          onClick={(event) =>
            handleChoice(event, [
              3,
              "You have chosen to take the easy way out and dismiss the importance of training for the team.",
              "Dismissing the importance of training hinders personal and professional development.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={importanceIcon}
              style={{ width: "279px", height: "279px", borderRadius: "45%" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 3</h4>
              <small className="text-muted">
                Dismiss the importance of training for the team.
                <br />
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
        <p>{nextDesc[1]}</p>
        <button className="w-25 mx-auto mb-5" onClick={Proceed}>
          Proceed
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AgeismFive;
