import { useState, useEffect } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.js";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/_login.css";
import Footer from "../components/Footer.tsx";
import NavigationBar from "../components/NavBar.tsx";
import loginIcon from "../assets/login/loginIcon.svg";
import greyBg from "../assets/pastelGreyBg.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
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
  });

  const onLogin = async (e) => {
    console.log("Login clicked");
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home", { state: { email: email } });

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // const user = userCredential.user;
      navigate("/home", { state: { email: email } });
      // console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);

      // Password reset email sent!
      // ..
      if (confirm("Go to reset your password?")) {
        alert("Password reset email sent. Check your email!");
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      setError(`Error in password reset ${errorMessage}`);
      // ..
    }
  };

  return (
    <div
      data-aos=""
      className="bg-light container-fluid p-0"
      style={{
        height: "fit-content",
        overflow: "hidden",
        backgroundImage: `url(${greyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavigationBar />
      <div
        className="text-center"
        style={{
          height: "",
          backgroundImage: `url(${loginIcon})`,
          backgroundPositionX: "-3vw",
          backgroundPositionY: "19vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <div className="desc text-center" style={{ marginTop: "15vh" }}>
          <h3 className="text-dark">Welcome to Perception Pause</h3>
          <text className="lead">To get started, please sign in</text>
        </div>

        <br />

        <div
          className="mx-auto p-3 "
          style={{
            borderRadius: "5px",
            boxShadow: "5px grey",
            opacity: "0.95",
          }}
        >
          <div
            className="row text-center"
            style={{ fontSize: "28px", backgroundColor: "" }}
          >
            <div className="col p-0"></div>
            <div className="col p-0">
              <div className="row form">
                <div className="col p-0">
                  <strong>Login</strong>
                </div>
              </div>
            </div>
            <div className="col p-0"></div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-outline-dark bg-dark text-light"
                style={{ textTransform: "none" }}
                onClick={signInWithGoogle}
              >
                <img
                  width="20px"
                  style={{ marginBottom: "3px", marginRight: "5px" }}
                  alt="Google sign-in"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />{" "}
                Continue with Google
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col lead w-25 text-center">
              <small className="">- OR -</small>
            </div>
          </div>
          <br />
          <div className="row text-center">
            <label
              htmlFor="email-address"
              className="lead p-0 mb-1"
            >
              Email address
            </label>
          </div>
          <div className="row" style={{}}>
            <div className="col p-0 text-center">
              <input
                type="email"
                // label="Email address"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=""
                className="text-dark  p-0 text-center lead small"
                style={{
                  width: "25vw",
                  border: "none",
                  backgroundColor: "none",
                  background: "transparent",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
          </div>

          <br />
          <div className="row text-center">
            <label htmlFor="password" className="lead p-0 mb-1">
              Password
            </label>
            <div className="col p-0">
              <input
                type="password"
                // label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=""
                className="text-dark p-0 text-center lead small"
                style={{
                  width: "25vw",
                  border: "none",
                  backgroundColor: "none",
                  background: "transparent",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
          </div>

          <div className="row text-center">
            <div className="col" onClick={resetPassword}>
              <NavLink to="">Forgot password?</NavLink>
            </div>
          </div>
          <br />
          <br />
          <div className="row text-center">
            <div className="w-50 col p-0">
              <button
                type="submit"
                onClick={onLogin}
                style={{ width: "200px", height: "auto", alignSelf: "center" }}
              >
                Log In
              </button>
            </div>
          </div>
          <br />

          <p className="text-sm text-center">
            No account yet? <NavLink to="/register">Sign up</NavLink>
          </p>
          <p className="text-center" style={{ color: "red" }}>
            {error}
          </p>
          {/* <p className="text-center" style={{color:"green"}}>{success}</p>           */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
