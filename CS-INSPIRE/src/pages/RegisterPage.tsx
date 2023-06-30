import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import logo from "../assets/PerceptionPause_newlogo.png";
import Footer from "../components/Footer.tsx";
import greyBg from "../assets/pastelGreyBg.png";
import NavigationBar from "../components/NavBar.tsx";
import registerIcon from "../assets/homepage/slideOne.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

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
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login", { state: { name: username } });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);

        // ..
      });
  };

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: `url(${greyBg})`,
        backgroundSize: "cover",
        height: 'fit-content'
      }}
      className="container-fluid bg-light p-0"
    >
      <NavigationBar />

      <div
        className=""
        style={{
          height: "fit-content",
          marginTop: "18vh",
          backgroundImage: `url(${registerIcon})`,
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'right', 
          backgroundSize: '50%'
        }}
      >
        <div className="" style={{  }}>
          <h3 className="text-center font-weight-light p-3">
            Discover your hidden side today.
          </h3>
          <form
            className="p-4 w-75 mx-auto text-center"
            style={{ borderRadius: "15px" }}
          >
            <br />
            <div className="row" style={{ fontSize: "28px" }}>
              <div className="col p-0">
                <strong>Register</strong>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <label htmlFor="email-address" className="lead">
                Email address
              </label>

              <div className="col text-center" style={{}}>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=""
                  style={{
                    height: "",
                    border: "none",
                    backgroundColor: "none",
                    background: "transparent",
                    borderBottom: "1px solid black",
                  }}
                  className="w-50 p-0 text-center lead small"
                />
              </div>
            </div>

            <br />

            <div className="row">
              <label htmlFor="username" className="lead">
                Username
              </label>
              <div className="col">
                <input
                  type="email"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder=""
                  style={{
                    height: "",
                    border: "none",
                    backgroundColor: "none",
                    background: "transparent",
                    borderBottom: "1px solid black",
                  }}
                  className="w-50 p-0 text-center lead small"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <label htmlFor="password" className="lead">
                Password
              </label>
              <div className="col">
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder=""
                  style={{
                    height: "",
                    border: "none",
                    backgroundColor: "none",
                    background: "transparent",
                    borderBottom: "1px solid black",
                  }}
                  className="w-50 p-0 text-center lead small"
                />
              </div>
            </div>

            <br />
            <br />
            <button
              type="submit"
              onClick={onSubmit}
              className=""
              style={{ width: "200px", height: "auto", alignSelf: "center" }}
            >
              Sign up
            </button>
            <br />
            <br />
            <input
              type="checkbox"
              name="agree-term"
              id="agree-term"
              class="agree-term"
            />
            <label for="agree-term" class="label-agree-term">
              <span>
                <span></span>
              </span>
              &nbsp;I agree all statements in{" "}
              <a href="#" className="term-service">
                Terms of service
              </a>
            </label>
            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
            <p style={{ color: "red" }}>{error}</p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignupPage;
