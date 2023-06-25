import { useState, useEffect } from "react";
import NavigationBar from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx";
import quizzesBg from "../assets/quiz/quizBg.svg";
import greyBg from "../assets/pastelGreyBg.png";
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
      <div
        className=""
        style={{
          marginTop: "6vh",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${greyBg})`,
        }}
      >
        <h3 style={{ left: "-20vw" }}>
          Take a general quiz to examine your unconscious bias or just a general
          quiz!
        </h3>
        <img src={quizzesBg} alt="quiz" style={{ height: "auto" }} />
        <button
          className="p-3"
          style={{ marginTop: "50vh" }}
          onClick={startQuiz}
        >
          General Quiz
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${greyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          width: "100vw",
          borderBottom: "1px solid grey",
        }}
      >
        <h1
          style={{
            paddingTop: "12vh",
            paddingLeft: "12vw",
            fontSize: "60px",
          }}
        >
          <span data-aos="fade-in" data-aos-delay="300">
            History and Science behind Unconscious Bias
          </span>
        </h1>
        <img src={biasRealityCheckBg} alt="biasReality" />
        <button
          className="mx-auto p-3"
          style={{ marginTop: "50vh" }}
          onClick={startBiasCheck}
        >
          Bias Reality Check!
        </button>
        <br />
        <p
          className="lead"
          data-aos="fade-right"
          data-aos-delay="300"
          style={{ color: "grey", fontSize: "20px", paddingLeft: "12vw" }}
        >
          <div className="row" style={{ paddingLeft: "" }}>
            <div className="col-sm-12 w-75">
              Over the last three decades, our understanding of unconscious bias
              has evolved. The concept of unconscious bias emerged from the
              field of social psychology in the 20th century. While early
              theories of bias focused primarily on conscious and explicit
              prejudices, researchers began to recognize the role of unconscious
              processes in shaping human behavior. <br />
              <br />
              Psychologists such as Gordon Allport and Mahzarin Banaji made
              significant contributions to the study of implicit biases and
              their impact on individuals and society. The nature of unconscious
              bias is now well understood, and an instrument (Implicit
              Association Test or IAT) to assess unconscious bias has been
              developed and rigorously tested globally.
            </div>
          </div>
        </p>
        <br />
        {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
      </div>

      <Footer />
    </div>
  );
}

export default Quiz;
