import { useState, useEffect, useSyncExternalStore } from "react";
import Navbar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import Chatbot from "../components/Chatbot.tsx";
import footerBg from "../assets/pastelGreyBg.png";
import {
  getAuth,
  updateEmail,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import profileBgIcon from "../assets/profile/profileBgIcon.svg";
import pastelgreyBg from "../assets/pastelGreyBg.png";
import "../styles/_profile.css";
import {
  get,
  ref,
  child,
  getDatabase,
  onValue,
  update,
} from "firebase/database";
import { FaMedal } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [email, setEmail] = useState("");
  const [noPathsCompleted, setNoPathsCompleted] = useState(0);
  const [ageismstyleObj, setAgeismStyle] = useState({});
  const [sexismstyleObj, setSexismStyle] = useState({});
  const [beautystyleObj, setBeautyStyle] = useState({});
  const [halostyleObj, setHaloStyle] = useState({});
  const [sexismMedal, updateSexismMedal] = useState(null);
  const [beautyMedal, updateBeautyMedal] = useState(null);
  const [haloeffectMedal, updatehaloeffectMedal] = useState(null);
  const [quizStyleObj, setQuizStyle] = useState({});
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [login, setLoginTime] = useState("");
  const [quizStatus, updateQuizStatus] = useState("incomplete");
  const [error, setError] = useState("");
  const [quizScore, updateQuizScore] = useState(0);
  // const [biasCheckStatus, setbiasCheckStatus] = useState("incomplete");
  const [ageismStatus, updateAgeismStatus] = useState("incomplete");
  const [ageismMedal, updateAgeismMedal] = useState(null);
  const [sexismStatus, updateSexismStatus] = useState("incomplete");
  const [haloEffectStatus, updatehaloEffectStatus] = useState("incomplete");
  const [beautyBiasStatus, updatebeautyBiasStatus] = useState("incomplete");
  const [status, setStatus] = useState(true);
  const { state } = useLocation();

  function changeName() {
    let newEmail = prompt("Enter your new email: ");
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        console.log(user);
        window.location.reload(false)
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    getFromDatabase();
  },[])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });

    // unconscious bias quiz
    if (user !== null) {
      user.providerData.forEach((profile) => {
        if (profile.displayName) {
          setName(profile.displayName);
        } else {
          setName("-");
        }
        setEmail(profile.email);
        if (profile.photoURL) {
          setPhoto(profile.photoURL);
        } else {
          setPhoto(
            "https://icon-library.com/images/user-png-icon/user-png-icon-6.jpg"
          );
        }
        setId(user.uid);
      });
      setLoginTime(user.metadata.lastSignInTime);
    }
  }, []);

  //read statuses of roleplay from database
  function getFromDatabase() {
    console.log("retrieving data from database...");

    const db = getDatabase();

    // retrieving data for ageism

    var nopathsArray = []; // to keep track of paths completed
    const ageismStatusRef = ref(db, `${id}/ageismStatus`);
    console.log(ageismStatusRef);
    onValue(ageismStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateAgeismStatus(data);
      } else {
        updateAgeismStatus("incomplete");
      }
    });

    if (ageismStatus == "completed") {
      nopathsArray.push(1);
      updateAgeismMedal(<FaMedal />);
      setAgeismStyle({});
    } else {
      setAgeismStyle({});
      updateAgeismMedal(<FaQuestion />);
    }

    // retrieving data for sexism
    const sexismStatusRef = ref(db, `${id}/sexismStatus`);
    console.log(sexismStatusRef);
    onValue(sexismStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateSexismStatus(data);
      } else {
        updateSexismStatus("incomplete");
      }
    });

    if (sexismStatus == "completed") {
      nopathsArray.push(1);
      updateSexismMedal(<FaMedal />);
      setSexismStyle({});
    } else {
      setSexismStyle({});
      updateSexismMedal(<FaQuestion />);
    }

    // retrieving data for halo effect
    const haloeffectStatus = ref(db, `${id}/haloeffectStatus`);
    console.log(haloeffectStatus);
    onValue(haloeffectStatus, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updatehaloEffectStatus(data);
      } else {
        updatehaloEffectStatus("incomplete");
      }
    });

    if (haloEffectStatus == "completed") {
      nopathsArray.push(1);
      updatehaloeffectMedal(<FaMedal />);
      setHaloStyle({
        // fontFamily: "Oleo Script",
      });
    } else {
      setHaloStyle({
        // fontFamily: "Oleo Script",
      });
      updatehaloeffectMedal(<FaQuestion />);
    }

    // retrieving data for beauty bias
    const beautyBiasRef = ref(db, `${id}/beautyBiasStatus`);
    console.log(beautyBiasRef);
    onValue(beautyBiasRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updatebeautyBiasStatus(data);
      } else {
        updatebeautyBiasStatus("incomplete");
      }
    });

    if (beautyBiasRef == "completed") {
      nopathsArray.push(1);
      updateBeautyMedal(<FaMedal />);
      setBeautyStyle({
        // fontFamily: "Oleo Script",
      });
    } else {
      setBeautyStyle({});
      updateBeautyMedal(<FaQuestion />);
    }

    setNoPathsCompleted(nopathsArray.length);
    // retrieving data for unconscious bias quiz
    const quizStatusRef = ref(db, `${id}/generalQuizStatus`);
    onValue(quizStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateQuizStatus("completed ✔️");
        setQuizStyle({ color: "green" });
      } else {
        updateQuizStatus("incomplete ❌");
        setQuizStyle({ color: "#ff726f" });
      }
    });

    // get recent score for quiz
    const quizScoreRef = ref(db, `${id}/score`);
    onValue(quizScoreRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateQuizScore(data);
      } else {
        updateQuizScore("-");
      }
    });
  }

  // Sign out the user if log out button is clicked
  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        if (confirm("Are you sure you want to sign out?")) {
          alert("Sign out successful!");
          navigate("/");
        }
      })
      .catch((error) => {
        // An error happened.
        alert("Error in signing out!");
      });
  }

  return (
    <div
      className="container-fluid p-0"
      style={{
        overflow: "hidden",
        backgroundImage: `url(${pastelgreyBg})`,
      }}
    >
      <Navbar></Navbar>
      <Chatbot></Chatbot>
      <section
        className="section"
        id="about"
        style={{
          paddingTop: "12vh",
          height: "100vhh",
          backgroundImage: `url()`,
          backgroundPosition: "left",
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img className="" src={profileBgIcon} alt="profileIcon" style={{float: 'right'}}/> */}
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col lead mt-4" style={{ float: "right" }}>
            Last Login: {login}
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-lg-4">
            <div className="about-avatar text-center">
              <img
                src={photo}
                title=""
                style={{ width: "200px", height: "200px" }}
                alt="Profile Pic"
              />
              <br />
              <br />
              <button className=" text-center" onClick={signout}>
                Log out
              </button>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <h2 style={{ letterSpacing: 2.5 }}>Particulars</h2>
              <hr />
            </div>
            <div className="row about-text go-to">
              <div className="col-md-4 p-2">
                <h2
                  className="lead"
                  style={{ fontSize: "25px", fontWeight: "400" }}
                >
                  Name
                </h2>
                <p className="" style={{ fontWeight: "300" }}>
                  {name}
                </p>
              </div>

              <div className="col-md-4 p-2">
                <h2
                  className="lead"
                  style={{
                    fontSize: "25px",
                    display: "inline-block",
                    fontWeight: "400",
                  }}
                >
                  Email &nbsp;{" "}
                  <button
                    className="p-1"
                    style={{ fontSize: "0.8rem" }}
                    onClick={changeName}
                  >
                    Update email
                  </button>{" "}
                  {error}
                </h2>
                {/* <button
                  className="m-1 p-1"
                  style={{ fontSize: "15px", display: "inline" }}
                  //   onClick={getFromDatabase}
                >
                  Update
                </button> */}
                <p style={{ fontWeight: "300" }}>{email}</p>
              </div>

              <div className="col-md-4 p-2">
                <h2
                  className="lead"
                  style={{ fontSize: "25px", fontWeight: "400" }}
                >
                  User ID
                </h2>
                <div className="media">
                  {/* <label className=''>Email:&nbsp;</label> */}
                  <p style={{ fontWeight: "300" }}>{id}</p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="row ">
          <div className="col-4"></div>
          <div className="col">
            <h2 style={{ letterSpacing: 2.5 }}>Statistics</h2>
            <hr />
          </div>
        </div>
        <div className="row mt-4" style={{}}>
          <div className="col-md-4"></div>
          <div className="col">
            <div className="count-data">
              <h2
                className="m-0px font-w-600 lead"
                style={{ fontSize: "25px", fontWeight: "400" }}
              >
                Paths Encountered
                <h4
                  className="mt-2 mx-1 lead"
                  data-to="150"
                  data-speed="150"
                  style={{ fontWeight: "" }}
                >
                  {noPathsCompleted} /4
                </h4>
              </h2>
              {/* <span
                className=""
                style={{
                  backgroundColor: "#8FBC8F",
                  fontSize: "20px",
                  border: "none",
                  color: "black",
                  padding: "5px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  margin: "",
                  fontSize: "5px",
                  cursor: "pointer",
                  borderRadius: "16px",
                }}
              ></span>
              &nbsp;
              <span style={{ fontSize: "0.8rem" }}>Complete</span>
              <br />
              <span
                className=""
                style={{
                  backgroundColor: "indianred",
                  fontSize: "20px",
                  border: "none",
                  color: "black",
                  padding: "5px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  margin: "",
                  cursor: "pointer",
                  fontSize: "5px",
                  borderRadius: "16px",
                }}
              ></span>
              &nbsp;
              <span style={{ fontSize: "0.8rem" }}>Incomplete</span> */}
              <br />
              <div
                className="row text-start p-1"
                style={{ marginTop: "1vh", marginLeft: "0.5px" }}
              >
                <div className="col-3 mb-2 p-0 text-center" style={{}}>
                  <span style={ageismstyleObj} className="lead">
                    Ageism
                  </span>
                  <br />
                  <div className="my-auto">
                    {/* <span className="" style={{}}>
                      Ageism
                      <br />
                    </span> */}
                    <span style={{ fontSize: "2rem" }}>{ageismMedal}</span>

                    {/* <span>{ageismStatus}</span> */}
                  </div>
                </div>
                <div className="col-3 mb-2 p-0 text-center">
                  <span className="lead" style={sexismstyleObj}>
                    Gender Bias / Sexism
                  </span>
                  <br />
                  <div className="my-auto">
                    {/* <span className="" style={{}}>
                      Sexism
                      <br />
                    </span> */}
                    <span style={{ fontSize: "2rem" }}>{sexismMedal}</span>
                    {/* <span>{sexismStatus}</span> */}
                  </div>
                </div>
                <div className="col-3 mb-2 p-0 text-center" style={{}}>
                  <span className="lead" style={halostyleObj}>
                    Halo Effect
                  </span>
                  <br />
                  <div className="my-auto text-center">
                    {/* <span className="" style={{}}>
                      Halo Effect
                      <br />
                    </span> */}
                    <span style={{ fontSize: "2rem" }}>{haloeffectMedal}</span>
                    {/* <span>{haloEffectStatus}</span> */}
                  </div>
                </div>
                <div className="col-3 mb-2 p-0 text-center" style={{}}>
                  <span className="mx-auto lead" style={beautystyleObj}>
                    Beauty Bias
                  </span>
                  <br />
                  <div className="my-auto text-center">
                    {/* <span className="" style={{}}>
                      Beauty Bias
                      <br />
                    </span> */}
                    <span style={{ fontSize: "2rem" }}>{beautyMedal}</span>
                    {/* <span>{beautyBiasStatus}</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row mb-3">
          <div className="col-4"></div>
          <div className="col col-lg-3">
            <div className="count-data">
              <h2
                className="lead mt-3 font-w-600"
                style={{ fontSize: "25px", fontWeight: "400" }}
              >
                Unconscious Bias Quiz
              </h2>
              <h5
                className=""
                data-to="850"
                data-speed="850"
                style={quizStyleObj}
              >
                {quizStatus} &nbsp;
                <span
                  className="text-muted"
                  style={{ fontWeight: 300, fontSize: "1rem" }}
                >
                  ( Recent Score: {quizScore} / 5 )
                </span>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
