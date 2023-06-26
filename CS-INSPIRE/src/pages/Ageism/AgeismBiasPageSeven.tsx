import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import outcomeIcon from "../../assets/outcomeIcon.png";
import pastelGreyBg from "../../assets/pastelGreyBg.png";
import outcomeBg from "../../assets/outcomeBg.svg";
import mitigatingBg from "../../assets/homepageLogin/mitigatingBias.png";
import { getAuth, updateEmail, signOut } from "firebase/auth";
import { db } from "../../firebase/firebase.js";
import { getDatabase, ref, set, update } from "firebase/database";

function AgeismSix() {
  const { state } = useLocation();
  // const {reflection} = state.reflection;
  const [ageismStatus, setAgeismStatus] = useState("completed");
  const [candidate, setCandidate] = useState("");
  const [reflection, setReflection] = useState("");
  const [descOutcome, setDescOutcome] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [favorable, setFavorable] = useState("");
  const [emoji, setEmoji] = useState("");
  const [id, setId] = useState("");
  const [noActionFavorable, setNoActionsFavorable] = useState(0);
  const [simulationResults, setSimulationResults] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    console.log("Running the end of ageism script");
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (noActionFavorable < 2) {
      setEmoji("😢");
      setSimulationResults(
        "You have selected options influenced by age bias, which hinders collaboration in the given scenario. You had rather conflicting perceptions and your actions have shown to be leaning more towards your unconscious bias."
      );
    } else if (noActionFavorable == 2) {
      setEmoji("🙂");
      setSimulationResults(
        "Not bad! You have displayed certain unconscious bias here and there. But with more knowledge and awareness of it, we believe you will be more firm in your choices!"
      );
    } else if (noActionFavorable == 3) {
      setEmoji("👍");
      setSimulationResults(
        "Great job right there! You are rather aware of your own unconscious bias and do not really let it affect you as much!"
      );
    } else {
      setEmoji("😄");
      setSimulationResults(
        "Great job! You have selected options that challenge unconscious bias and promote inclusivity. Most importantly, you are clear and firm on your actions, considering the presence of unconscious bias."
      );
    }
    setDescOutcome(state.outcome);
    if (descOutcome[0] == 1) {
      setFavorable("✔️ Favorable");
    } else if (descOutcome[0] == 2) {
      setFavorable("❌ Not favorable");
    } else {
      setFavorable("❌ Not favorable");
    }

    if (favorable == "✔️ Favorable") {
      setNoActionsFavorable(state.noFavorable + 1);
    } else {
      setNoActionsFavorable(state.noFavorable);
    }

    setCandidate(state.candidate);
    setReflection(state.reflection);

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setId(user.uid);
      });
    }
  });

  function writeToDatabase () {
    console.log(ageismStatus);
    console.log("writing to database..");
    const db = getDatabase()
    console.log(db)
    update(ref(db, id, '/ageismStatus/'), {
      ageismStatus: ageismStatus,
    }).catch(alert);

    console.log(ageismStatus);
    navigate("/profile", {
      state: {
        ageismStatus: ageismStatus,
        outcome: descOutcome,
        candidate: candidate,
        reflection: reflection,
      },
    });
  };

  const handleChoice = (event, param) => {
    console.log(event);
    console.log(param);
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
            height: "80vh",
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
          <h3 className="">Overall Results:&nbsp;{emoji}</h3>
          <span style={{ width: "" }} className="mx-auto w-50">
            {simulationResults}
          </span>
          <br />

          {/* <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p> */}
          <br />
        </div>
        <div
          style={{
            backgroundImage: `url(${mitigatingBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
              color: "black",
            }}
          >
            <h2 data-aos="fade-in" data-aos-delay="300">
              <span style={{ fontWeight: "bold", fontSize: "50px" }}>
                🏅 Continue Exploring and Learning
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
                style={{ paddingLeft: "10vw", textAlign: "right" }}
              >
                You have received a badge for completing this roleplay. Check
                your profile to view the achievement badge.
                <br />
                <button className="w-25 mx-auto mb-5" onClick={writeToDatabase}>
                  View badge!
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

export default AgeismSix;
