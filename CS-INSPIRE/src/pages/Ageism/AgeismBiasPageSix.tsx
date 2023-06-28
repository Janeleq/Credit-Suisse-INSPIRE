import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import outcomeIcon from "../../assets/outcomeIcon.png";
import evaluationBg from "../../assets/ageism/performanceEval.jpg";
import contributionIcon from "../../assets/ageism/contributionIcon.png";
import evaluationIcon from "../../assets/ageism/evaluationIcon.png";
import energeticIcon from "../../assets/ageism/energeticIcon.png";
import pastelGreyBg from "../../assets/pastelGreyBg.png";
import outcomeBg from "../../assets/outcomeBg.svg";
import actionIcon from "../../assets/action.png"
function AgeismSix() {
  const { state } = useLocation();
  const action = state.outcome[0];
  // const {reflection} = state.reflection;
  const [nextDesc, setNextChosenDesc] = useState(""); // data passed to the next page
  const [candidate, setCandidate] = useState("");
  const [reflection, setReflection] = useState("");
  const [descOutcome, setDescOutcome] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [favorable, setFavorable] = useState("");
  const [noActionFavorable, setNoActionsFavorable] = useState(0);
  const navigate = useNavigate();

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    console.log(state.outcome);
    setDescOutcome(state.outcome);
    console.log(descOutcome);
    if (action == 1) {
      setFavorable("✔️ Favorable");
    } else if (action == 2) {
      setFavorable("❌ Not favorable");
    } else {
      setFavorable("❌ Not favorable");
    }

    // var noActionFavorable = state.noFavorable;

    // if (favorable == "✔️ Favorable") {
    //    noActionFavorable = (state.noFavorable + 1)
    // }
    if (favorable == "✔️ Favorable") {
      setNoActionsFavorable(state.noFavorable + 1);
      console.log(noActionFavorable);
    } else {
      setNoActionsFavorable(state.noFavorable);
    }

    console.log(noActionFavorable);

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

  const handleChoice = (event, param) => {
    console.log(event);
    console.log(param);
    setNextChosenDesc(param);
  };

  const Proceed = () => {
    if (nextDesc) {
      navigate("/bias/ageismRoleplayContFive", {
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
        style={{ marginTop: "", backgroundImage: `url(${pastelGreyBg})`}}
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
          <h3 className="" style={{ marginTop: "20vh" }}>
            {/* <p>{descOutcome[1]}</p> */}
            <img src={outcomeIcon} alt="outcome" style={{ width: "3%" }} />{" "}
            &nbsp; Outcome / Consequence of your action
            <br />
            <span className="text-muted" style={{ marginLeft: "-2%" }}>
              {favorable}
            </span>
          </h3>
          <p style={{ fontSize: "1.2rem" }}>{descOutcome[2]}</p>
        </div>
        <div
          className="p-5"
          style={{
            height: "80vh",
            backgroundImage: `url(${evaluationBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="bg-dark text-light"
            style={{
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "",
              fontWeight: "300",
              fontSize: "1.15rem",
              opacity: 0.8,
            }}
          >
            <h4 className="text-light mb-2" style={{fontWeight: 'lighter'}}>Act 4: Performance Evaluation</h4>
            <hr/>
            <p className="w-50 mx-auto">
              It's time for the annual performance evaluations where you must assess
              each team member.
            </p>

            {/* <p className='mt-5 w-50 mx-auto'>After looking through quite some time, you found a unique training program that you think would suit the employees well. However, there is only two opportunity slot for this training program, but you realise you have 3 employees at hand.</p> */}
            <br />
            <p className="mb-5">As the manager, what would you do?</p>
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
              "You have chosen to evaulate each team member equally, based on their individual contributions and achievements.",
              "Evaluating each team member objectively based on their individual contributions is fair.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={evaluationIcon}
              style={{ width: "279px", height: "279px", borderRadius: "45%" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 1</h4>
              <small className="text-muted">
                {" "}
                Evaluate each team member based on individual contributions and
                achievements.
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
              "You have chosen to downplay Alex's contributions due to assumption of his age.",
              "Downplaying Alex's contributions due to assumptions about age is essentially encouraging ageism.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={contributionIcon}
              style={{ width: "279px", height: "279px", borderRadius: "45%" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 2</h4>
              <small className="text-muted">
                Downplay Alex's contributions due to assumptions about age.
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
              "You have chosen to give Emma higher ratings based on assumptions about youth and energy.",
              "Giving Emma higher ratings based solely based on assumptions about youth and energy is unfair.",
            ])
          }
        >
          <div className="team text-center rounded p-3 py-4 w-75 h-75 mx-auto">
            <img
              src={energeticIcon}
              style={{ width: "279px", height: "279px", borderRadius: "45%" }}
              className="img-fluid avatar avatar-medium shadow rounded-pill"
              alt=""
            />
            <div className="content mt-3">
              <h4 className="title mb-0">Action 3</h4>
              <small className="text-muted">
                Give Emma higher ratings based on assumptions about youth and
                energy.
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

export default AgeismSix;
