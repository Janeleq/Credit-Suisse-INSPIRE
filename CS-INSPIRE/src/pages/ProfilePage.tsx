import { useState, useEffect } from "react";
import Navbar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import Chatbot from "../components/Chatbot.tsx";
import footerBg from "../assets/pastelGreyBg.png";
import { getAuth, updateEmail, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase.js";
import { uid } from "uid";
import { get, ref, onValue } from "firebase/database";
import { TodayOutlined } from "@mui/icons-material";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [login, setLoginTime] = useState("");
  const [quizStatus, setquizstatus] = useState("incomplete");
  const [biasCheckStatus, setbiasCheckStatus] = useState("incomplete");
  const [ageismStatus, setAgeismStatus] = useState("incomplete");
  const { state } = useLocation();


  //read statuses of roleplay from database
  const getFromDatabase = () => {
    const userId = auth.currentUser.uid;
     onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data!== null) {
        Objec .values(data).map((status) => {
            setAgeismStatus(())
        }
      }
      // ...
    }, {
      onlyOnce: true
    });
  };
  // function writeUserData(userId, name, email, imageUrl) {
  // const db = getDatabase();
  // set(ref(db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  // });
  // }

  updateEmail(auth.currentUser, email)
    .then(() => {
      // Email updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
      const errorMessage = error.message;
      setError(errorMessage);
    });

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    getFromDatabase()

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });



    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  useEffect(() => {
    if (ageismStatus == "complete") {
      setOutput(`<div style=color: green>complete</div>`);
    } else {
      setOutput(`<div style={{color: red}}>incomplete</div>`);
    }
    console.log(ageismStatus);
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log(user);

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

        setId(profile.uid);
      });
      setLoginTime(user.metadata.lastSignInTime);
      setId(user.uid);
    }
  });

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
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
      <Chatbot></Chatbot>
      <section
        className="section"
        id="about"
        style={{ marginTop: "18vh", height: "100vh" }}
      >
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col lead" style={{ float: "left" }}>
            Last Login: {login}
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-lg-4">
            <div className="about-avatar text-center">
              <img
                src={photo}
                title=""
                style={{ width: "250px", height: "250px" }}
                alt="Profile Pic"
              />
              <br />
              <br />
              <button className=" text-center" onClick={signout}>
                Log out
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-text go-to">
              <h2 className="">Name</h2>

              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    {/* <label>Name: &nbsp;</label> */}
                    <p>{name}</p>
                  </div>
                  <br />
                  <h2 className="">
                    Email{" "}
                    <button
                      className="m-1 p-1"
                      style={{ fontSize: "16px" }}
                      onClick={getFromDatabase}
                    >
                      Update
                    </button>
                  </h2>
                  <div className="media">
                    {/* <label className=''>Email:&nbsp;</label> */}
                    <p>{email}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="">User ID</h2>
                  <div className="media">
                    {/* <label className=''>Email:&nbsp;</label> */}
                    <p>{id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className="counter">
          <div className="row mt-4">
            <div className="col"></div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  0/4
                </h6>
                <p className="m-0px font-w-600">Paths Encountered</p>
                1. Ageism: {ageismStatus}
                <br />
                2. Gender Bias / Sexism: <br />
                3. Halo Effect: <br />
                4. Beauty Bias: <br />
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  850
                </h6>
                <p className="m-0px font-w-600">Unconscious Bias Quiz</p>
                {quizStatus}
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">
                  190
                </h6>
                <p className="m-0px font-w-600">Bias Reality Check</p>
                {biasCheckStatus}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
