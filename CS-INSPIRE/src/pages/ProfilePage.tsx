import { useState, useEffect, useSyncExternalStore } from "react";
import Navbar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import Chatbot from "../components/Chatbot.tsx";
import footerBg from "../assets/pastelGreyBg.png";
import { getAuth, updateEmail, signOut } from "firebase/auth";
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
  const [quizScore, updateQuizScore] = useState(0);
  // const [biasCheckStatus, setbiasCheckStatus] = useState("incomplete");
  const [ageismStatus, updateAgeismStatus] = useState("incomplete");
  const [ageismMedal, updateAgeismMedal] = useState(null);
  const [sexismStatus, updatesexismStatus] = useState("incomplete");
  const [haloEffectStatus, updatehaloEffectStatus] = useState("incomplete");
  const [beautyBiasStatus, updatebeautyBiasStatus] = useState("incomplete");
  const [status, setStatus] = useState(true);
  const { state } = useLocation();

  // updateEmail(auth.currentUser, email)
  //   .then(() => {
  //     // Email updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //     const errorMessage = error.message;
  //     setError(errorMessage);
  //   });

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
    if (status) {
      getFromDatabase();
      // setStatus(false)
    }

    // unconscious bias quiz
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        if (profile.displayName) {
          setName(profile.displayName);
        } else {
          setName("-");
        }
        console.log("  Email: " + profile.email);
        setEmail(profile.email);
        console.log("  Photo URL: " + profile.photoURL);
        if (profile.photoURL) {
          setPhoto(profile.photoURL);
        } else {
          setPhoto(
            "https://icon-library.com/images/user-png-icon/user-png-icon-6.jpg"
          );
        }
        console.log(user.uid);
        setId(user.uid);
      });
      console.log(user.metadata.lastSignInTime);
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
      setAgeismStyle({
        backgroundColor: "green",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
    } else {
      setAgeismStyle({
        backgroundColor: "red",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
      updateAgeismMedal("");
    }

    // retrieving data for sexism
    // const sexismStatusRef = ref(db, `${id}/sexismStatus`);
    // console.log(sexismStatusRef);
    // onValue(sexismStatusRef, (snapshot) => {
    //   if (snapshot.exists()) {
    //     const data = snapshot.val();
    //     updatesexismStatus(data);
    //   } else {
    //     updatesexismStatus("incomplete");
    //   }
    // });

    // if (ageismStatus == "completed") {
    //   updateAgeismMedal(<FaMedal />);
    //   setAgeismStyle({ fontSize: '0.85rem', fontWeight: '700', backgroundColor: "green", borderRadius: '5px', padding: '2px'});
    //   setNoPathsCompleted(1);
    // } else {
    //   setAgeismStyle({ fontSize: '0.85rem', fontWeight: '700', backgroundColor: "red", borderRadius: '5px', padding: '2px' });
    //   updateAgeismMedal("");
    //   setNoPathsCompleted(0);
    // }

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
        backgroundColor: "green",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
    } else {
      setHaloStyle({
        // fontFamily: "Oleo Script",
        backgroundColor: "red",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
      updatehaloeffectMedal("");
    }

    // retrieving data for sexism
    const sexismStatusRef = ref(db, `${id}/sexismStatus`);
    console.log(sexismStatusRef);
    onValue(sexismStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updatesexismStatus(data);
      } else {
        updatesexismStatus("incomplete");
      }
    });

    if (sexismStatusRef == "completed") {
      nopathsArray.push(1);
      updateSexismMedal(<FaMedal />);
      setSexismStyle({
        // fontFamily: "Oleo Script",
        backgroundColor: "green",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
    } else {
      setSexismStyle({
        // fontFamily: "Oleo Script",
        backgroundColor: "red",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
      updateSexismMedal("");
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
        backgroundColor: "green",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
    } else {
      setBeautyStyle({
        backgroundColor: "red",
        paddingTop: "10%",
        textAlign: "center",
        border: "1px solid grey",
        height: "120px",
        width: "120px",
        borderRadius: "50%",
      });
      updateBeautyMedal("");
    }

    setNoPathsCompleted(nopathsArray.length);
    // retrieving data for unconscious bias quiz
    const quizStatusRef = ref(db, `${id}/generalQuizStatus`);
    onValue(quizStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateQuizStatus(data);
        setQuizStyle({ color: "green" });
      } else {
        updateQuizStatus("incomplete ❌");
        setQuizStyle({ color: "red" });
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
        backgroundImage: `url(${pastelgreyBg})`
      }}
    >
      <Navbar></Navbar>
      <Chatbot></Chatbot>
      <section
        className="section"
        id="about"
        style={{
          paddingTop: "12vh",
          height: '100vhh',
          backgroundImage: `url()`,
          backgroundPosition: "left",
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img className="" src={profileBgIcon} alt="profileIcon" style={{float: 'right'}}/> */}
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col lead" style={{ float: "right" }}>
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
                  Email &nbsp;
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
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Paths Encountered
              </h2>
              <h4
                className=""
                data-to="150"
                data-speed="150"
                style={{ fontWeight: "bold" }}
              >
                {noPathsCompleted} /4
              </h4>
              <br />
              <div
                className="row text-start p-1"
                style={{ marginLeft: "0.5px" }}
              >
                <div className="col-3 mb-2 p-0" style={{}}>
                  <span style={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    Path 1
                  </span>
                  <br />
                  <div className="my-auto" style={ageismstyleObj}>
                    <span className="text-muted" style={{}}>
                      Ageism
                      <br />
                    </span>
                    {ageismMedal}&nbsp;
                    <span>{ageismStatus}</span>
                  </div>
                </div>
                <div className="col-3 mb-2 p-0" style={{}}>
                  <span style={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    Path 2
                  </span>
                  <br />
                  <div className="my-auto" style={sexismstyleObj}>
                    <span className="text-muted" style={{}}>
                      Gender Bias / Sexism
                      <br />
                    </span>
                    {sexismMedal}&nbsp;
                    <span>{sexismStatus}</span>
                  </div>
                </div>
                <div className="col-3 mb-2 p-0" style={{}}>
                  <span style={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    Path 3
                  </span>
                  <br />
                  <div className="my-auto" style={halostyleObj}>
                    <span className="text-muted" style={{}}>
                      Halo Effect
                      <br />
                    </span>
                    {haloeffectMedal}&nbsp;
                    <span>{haloEffectStatus}</span>
                  </div>
                </div>
                <div className="col-3 mb-2 p-0" style={{}}>
                  <span style={{ fontWeight: "500", fontSize: "1.25rem" }}>
                    Path 4
                  </span>
                  <br />
                  <div className="my-auto" style={beautystyleObj}>
                    <span className="text-muted" style={{}}>
                      Beauty Bias
                      <br />
                    </span>
                    {beautyMedal}&nbsp;
                    <span>{beautyBiasStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4"></div>
          <div className="col col-lg-3">
            <div className="count-data">
              <h2
                className="lead mt-3 font-w-600"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Unconscious Bias Quiz
              </h2>
              <h4
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
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
