import { useState, useEffect } from "react";
import Navbar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import Chatbot from "../components/Chatbot.tsx";
import footerBg from "../assets/pastelGreyBg.png";
import { getAuth, updateEmail, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import profileBgIcon from "../assets/profile/profileBgIcon.svg";
import pastelgreyBg from "../assets/pastelGreyBg.png"
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
  const [styleObj, setStyle] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [login, setLoginTime] = useState("");
  const [quizStatus, updateQuizStatus] = useState("incomplete");
  const [quizScore, updateQuizScore] = useState(0)
  const [biasCheckStatus, setbiasCheckStatus] = useState("incomplete");
  const [ageismStatus, updateAgeismStatus] = useState("incomplete");
  const [ageismMedal, updateAgeismMedal] = useState(null);
  const [sexismStatus, updatesexismStatus] = useState("incomplete");
  const [haloEffectStatus, updatehaloEffectStatus] = useState("incomplete");
  const [beautyBiasStatus, updatebeautyBiasStatus] = useState("incomplete");
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
    getFromDatabase();

    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  useEffect(() => {
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
      console.log(user.metadata.lastSignInTime)
      setLoginTime(user.metadata.lastSignInTime);
    }
  }, []);

  //read statuses of roleplay from database
  function getFromDatabase() {
    console.log("retrieving data from database...");

    const db = getDatabase();
   
    
      // retrieving data for ageism
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
          updateAgeismMedal(<FaMedal />);
          setStyle({ fontWeight: 500, color: "green" });
          setNoPathsCompleted(1);
        } else {
          setStyle({ fontWeight: 500, color: "red" });
          updateAgeismMedal("");
          setNoPathsCompleted(0);
        }


    // retrieving data for unconscious bias quiz
    const quizStatusRef = ref(db, `${id}/generalQuizStatus`);
    onValue(quizStatusRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        updateQuizStatus(data);
      } else {
        updateQuizStatus("incomplete");
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
        backgroundImage: `url(${profileBgIcon})`,
        backgroundPosition: "left",
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar></Navbar>
      <Chatbot></Chatbot>
      <section
        className="section"
        id="about"
        style={{ paddingTop: "15vh", height: "100vh" }}
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
              <h2>Particulars</h2>
              <hr />
            </div>
            <div className="row about-text go-to">
              <div className="col-md-4 p-2">
                <h2 className="lead" style={{ fontSize: "25px" }}>
                  Name
                </h2>
                <p>{name}</p>
              </div>

              <div className="col-md-4 p-2">
                <h2
                  className="lead"
                  style={{ fontSize: "25px", display: "inline-block" }}
                >
                  Email &nbsp;
                </h2>
                <button
                  className="m-1 p-1"
                  style={{ fontSize: "15px", display: "inline" }}
                  //   onClick={getFromDatabase}
                >
                  Update 
                </button>
                <p>{email}</p>
              </div>

              <div className="col-md-4 p-2">
                <h2 className="lead" style={{ fontSize: "25px" }}>
                  User ID
                </h2>
                <div className="media">
                  {/* <label className=''>Email:&nbsp;</label> */}
                  <p>{id}</p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="row ">
          <div className="col-4"></div>
          <div className="col">
            <h2>Statistics</h2>
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col"></div>
          <div className="col-md-4 col-lg-3">
            <div className="count-data text-center">
            <h2 className="m-0px font-w-600 lead" style={{ fontSize: "20px" }}>Paths Encountered</h2>
              <h4 className="" data-to="150" data-speed="150">
                {noPathsCompleted} /4
              </h4>

              Ageism:{" "}
              <b>
                {ageismMedal}&nbsp;{ageismStatus}
              </b>
              <br />
              Gender Bias / Sexism: {sexismStatus}
              <br />
              Halo Effect: {haloEffectStatus} <br />
              Beauty Bias: {beautyBiasStatus} <br />
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="count-data text-center">
            <h2 className="lead m-0px font-w-600" style={{ fontSize: "20px" }}>Unconscious Bias Quiz</h2>
              <h4 className="" data-to="850" data-speed="850">
                {quizStatus}
              </h4>
              <h6 className="text-muted" style={{fontWeight: 300  }}>Recent Score: {quizScore}</h6>
            </div>
          </div>
          {/* <div className="col-6 col-lg-3">
            <div className="count-data text-center">
            <h2 className="lead m-0px font-w-600">Unconscious Bias Quiz</h2>
              <h6 className="count h2" data-to="190" data-speed="190">
                {biasCheckStatus}
              </h6>
              
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
