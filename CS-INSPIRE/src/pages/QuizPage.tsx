import { useState, useEffect } from "react";
import NavigationBar from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx";
import quizzesBg from "../assets/quiz/quizBg.svg";
import biasRealityCheckBg from "../assets/biasrealitycheck/biasRealityCheckBg.svg";
import Footer from "../components/Footer.tsx";
import { useNavigate } from "react-router-dom";
import "../styles/_quiz.css";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  // Helper Functions

  /* A possible answer was clicked */
  const startBiasCheck = () => {
    navigate("/quiz/biasRealityCheck");
  };

  const startQuiz = () => {
    navigate("/quiz/generalQuiz");
  };

  return (
    <div className="App container-fluid p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <Chatbot />
      <div className="" style={{marginTop: '10vh'}}>
        <h2>Take a general quiz to examine your unconscious bias or just a general quiz!</h2>
      </div>
      <div className="text-center" style={{ marginTop: "" }}>
        <h3></h3>
        <div className="row">
          <div
            className="col bias"
            style={{
              height: "100vh",
              opacity: "",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${biasRealityCheckBg})`,
            }}
          >
            <button
              className="mx-auto p-3"
              style={{ marginTop: "50vh" }}
              onClick={startBiasCheck}
            >
              Bias Reality Check!
            </button>
          </div>

          <div
            className="col quiz"
            style={{
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${quizzesBg})`,
            }}
          >
            <button
              className="p-3"
              style={{ marginTop: "50vh" }}
              onClick={startQuiz}
            >
              General Quiz
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
