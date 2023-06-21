import "../../styles/_ageism.css";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import outcomeIcon from "../../assets/outcomeIcon.png";
import teamDynamics from "../../assets/ageism/teamDynamics.jpg";
import mediateIcon from "../../assets/mediate.png";
import sideIcon from "../../assets/biasIcon.png";
import ignoranceIcon from "../../assets/ageism/ignoranceIcon.svg";
import actionIcon from "../../assets/action.png";

function AgeismFour() {
  const { state } = useLocation();
  // const {reflection} = state.reflection;
  const [outcome, setOutcome] = useState("");
  const [favorable, setFavorable] = useState("");
  const [action, setAction] = useState(0);
  const [reflection, setReflection] = useState("");
  const [candidate, setCandidate] = useState("");
  const [chosenDesc, setChosenDesc] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [noActionFavorable, setNoActionsFavorable] = useState(0);
  // const [noActionFavorable, setNoActionsFavorable] = useState(0);
  const navigate = useNavigate();

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    if (state.reflection == "null") {
      setReflection("You did not enter any reflection");
    } else {
      setReflection(state.reflection);
      // console.log(reflection)
    }

    setCandidate(state.candidate);
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  useEffect(() => {
    if (candidate == "Alex") {
      setOutcome(
        "😔 Selecting Alex solely based on experience may perpetuate age-related biases."
      );
      setFavorable("❌ Not favorable");
    } else if (candidate == "Emma") {
      setOutcome(
        "😔 Selecting Emma solely based on youth may overlook the value of experience."
      );
      setFavorable("❌ Not favorable");
    } else {
      setOutcome(
        "😊 Selecting John for their diverse perspectives ensures a balanced and inclusive team."
      );
      setFavorable("✔️ Favorable");
    }

    if (favorable == "✔️ Favorable") {
      setNoActionsFavorable(1);
    }
  });

  const handleChoice = (event, param) => {
    console.log(event);
    console.log(param);
    setChosenDesc(param[1]);
    setAction(param[0]);
  };

  const Proceed = () => {
    if (action) {
      navigate("/bias/ageismRoleplayContThree", {
        state: {
          reflection: reflection,
          outcome: outcome,
          action: action,
          candidate: candidate,
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
        style={{ marginTop: "15vh" }}
      >
        {/* <NavLink to="/bias/ageismRoleplayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

        {/* {reflection} */}

        <h2 className="lead">
          <img src={outcomeIcon} alt="outcome" style={{ width: "3%" }} /> &nbsp;
          Outcome / Consequence of your action <br />{" "}
          <span className="text-muted" style={{ marginLeft: "-2%" }}>
            {favorable}
          </span>
        </h2>

        <p>{outcome}</p>

        <div
          className="mt-4 p-5"
          style={{
            height: "80vh",
            backgroundImage: `url(${teamDynamics})`,
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <h4 style={{fontSize: '1.6rem'}}>Act 2: Team Dynamics</h4>
            <p className="w-50 mx-auto" style={{ padding: "10px", backgroundColor: "", borderRadius: '5px', fontSize: '1.2rem'}}>
              Now that the team leader has been chosen for the project, the
              project progresses. However as time passes, conflicts arise within
              the team.{" "}
            </p>

            <p className="mt-5" style={{ fontSize: '1.2rem' }}>
              Emma and John have differing approaches due to their generational
              differences. <br/><br/><br/>  
              As the manager, what would you do?
            </p>
    
          </div>
        </div>
        <p className="lead mt-4">
          <img src={actionIcon} alt="action" style={{ width: "3%" }} />
          &nbsp;Choose your next action.
        </p>
        <br />
        <div
          className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          onClick={(event) =>
            handleChoice(event, [
              1,
              "You have chosen to mediate between Emma and John, encouraging open dialogue between them, and getting rid of potential bias.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={mediateIcon}
              style={{ width: "279px", height: "279px" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 1</h4>
              <small className="text-muted">
                Mediate between Emma and John, encouraging open dialogue.
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
              "You have chosen to side with one team member based on personal bias.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={sideIcon}
              style={{ width: "279px", height: "279px" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 2</h4>
              <small className="text-muted">
                Side with one team member based on personal bias.
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
              "You have chosen to ignore the conflict between both Emma and John, and hope it resolves itself.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={ignoranceIcon}
              style={{ width: "279px", height: "279px" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 3</h4>
              <small className="text-muted">
                Ignore the conflict and hope it resolves itself.
                <br />
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
        <p>{chosenDesc}</p>
        <button className="w-25 mx-auto mb-5" onClick={Proceed}>
          Proceed
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AgeismFour;
