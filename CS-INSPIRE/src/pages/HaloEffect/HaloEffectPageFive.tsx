import "../../styles/_ageism.css";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import outcomeIcon from "../../assets/outcomeIcon.png";
import pastelGreyBg from "../../assets/pastelGreyBg.png";
import outcomeBg from "../../assets/outcomeBg.svg";
import ageismEndIcon from "../../assets/ageism/ageismEndIcon.svg";
import ageismEndIcon2 from "../../assets/ageism/ageismIcon2.svg";
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FaMedal } from "react-icons/fa";

function HaloEffectFive() {
  const { state } = useLocation();
  // const {reflection} = state.reflection;

  const action = state.action;
  const [candidate, setCandidate] = useState("");
  const [reflection, setReflection] = useState("");
  const [favorable, setFavorable] = useState("");
  const [haloeffectStatus, sethaloeffectStatus] = useState("completed");
  const [noActionFavorable, setNoActionsFavorable] = useState(0);
  const [simulationResults, setSimulationResults] = useState("");
  const [emoji, setEmoji] = useState("");
  const [id, setId] = useState("");
  const [descOutcome, setDescOutcome] = useState("");
  const [nextDesc, setNextChosenDesc] = useState(""); // data passed to the next page
  const [isLoading, setLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    setCandidate(state.candidate);
    setReflection(state.reflection);
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setId(user.uid);
      });
    }
  });

  useEffect(() => {
    if (action == 1) {
      setDescOutcome(
        "Evaluating each applicant holistically, considering multiple aspects of their profile, helps overcome the halo effect bias and ensures a fair and comprehensive evaluation."
      );
    } else if (action == 2) {
      setDescOutcome(
        "Relying heavily on GPA and standardized test scores as the primary factors for admission perpetuates the halo effect bias, as it prioritizes quantifiable measures and may overlook other valuable qualities and potential."
      );
    }
  });

  const handleChoice = (event, param) => {
    console.log(event);
    console.log(param);
    setNextChosenDesc(param);
  };

  function writeToDatabase() {
    console.log("writing to database..");
    const db = getDatabase();
    console.log(db);
    update(ref(db, id, "/haloEffectStatus/"), {
      haloeffectStatus: haloeffectStatus,
    }).catch(alert);

    console.log(haloeffectStatus);
    navigate("/profile", {
      state: {
        haloeffectStatus: haloeffectStatus,
        outcome: descOutcome,
        candidate: candidate,
        reflection: reflection,
      },
    });
  }

  const Proceed = () => {
    navigate("/bias/ageismRoleplayContFour", {
      state: {
        outcome: nextDesc,
        candidate: candidate,
        reflection: reflection,
      },
    });
  };

  return (
    <div
      className="container-fluid p-0 bg-light"
      style={{ overflow: "hidden" }}
    >
      <NavigationBar />

      <div
        className="row bg-light mx-auto text-center"
        style={{ marginTop: "" }}
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
          {/* <NavLink to="/bias/ageismRolePlayContTwo"><img src={backArrow} alt="back" style={{float: 'left', marginTop: '2%', marginLeft: '3%', width: '3%'}}/></NavLink> */}

          <h3 className="" style={{ marginTop: "20vh" }}>
            {/* <p>{descOutcome[1]}</p> */}
            <img src={outcomeIcon} alt="outcome" style={{ width: "3%" }} />{" "}
            &nbsp; Outcome / Consequence of your action
            <br />
            <span className="text-muted" style={{ marginLeft: "-2%" }}>
              {favorable}
            </span>
          </h3>
          <p className="mx-auto" style={{ fontSize: "1.2rem" }}>
            {descOutcome[2]}
          </p>
        </div>
        <div
          className="p-5"
          style={{
            height: "fit-content",
            backgroundImage: `url(${pastelGreyBg})`,
            backgroundSize: "cover",
            borderBottom: "1px solid grey",
          }}
        >
          <h2 style={{ fontWeight: "bold", fontSize: "50px" }}>The End!</h2>
          <p className="w-50 mx-auto" style={{ fontSize: "1.2rem" }}>
            Congratulations on reaching till the end of Ageism roleplay. We hope
            through the roleplay you are able to see ageism more objectively.
            Based on the your choices, You had{" "}
            <span style={{ fontWeight: "bold" }}>{noActionFavorable}/4</span>
            &nbsp;favorable actions throughout this entire Ageism Roleplay.{" "}
            <br />
            <br />
            <br />
            <br />
          </p>
          <img
            src={ageismEndIcon}
            alt="ending"
            style={{ width: "350px", height: "350px", float: "right" }}
          />
          <h3 className="">Overall Results:&nbsp;{emoji}</h3>
          <span
            style={{ width: "", fontSize: "20px" }}
            className="mx-auto w-50"
          >
            {simulationResults}
          </span>
          <br />

          {/* <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p> */}
          <br />
        </div>
        <div
          style={{
            backgroundImage: `url(${pastelGreyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "fit-content",
            width: "100vw",
          }}
        >
          <img
            src={ageismEndIcon2}
            alt="Exploration"
            style={{ float: "left" }}
          />
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
              color: "black",
            }}
          >
            <h2 data-aos="fade-in" data-aos-delay="300">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "50px",
                  textAlign: "center",
                }}
              >
                <FaMedal /> &nbsp;Continue Exploring and Learning
              </span>
            </h2>
          </h1>
          <br />
          <div
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "20px", paddingLeft: "10vw" }}
          >
            <div className="row" style={{ paddingLeft: "" }}>
              <div
                className="col-sm-12 w-75"
                style={{ paddingLeft: "10vw", textAlign: "" }}
              >
                You have received a badge for completing this roleplay. Check
                your profile to view the achievement badge.
                <br />
                <button className="mt-2 mx-auto mb-5" onClick={writeToDatabase}>
                  View badge
                </button>
              </div>
            </div>
          </div>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HaloEffectFive;
