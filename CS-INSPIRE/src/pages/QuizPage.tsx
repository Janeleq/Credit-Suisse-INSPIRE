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
        <img src={quizzesBg} alt="quiz" style={{ height: "80vh", float: "left" }} />
        <h3
          data-aos="fade-in"
          data-aos-delay="350"
          style={{ paddingTop: "15vh" }}
        >
          Wondering how your knowledge on unconscious bias fare?
        </h3>
        <span
          className="text-muted"
          data-aos="fade-in"
          data-aos-delay="400"
          style={{ left: "", marginTop: "5vh" }}
        >
          Take a general quiz to see your understanding on general quiz!
        </span>
        <br/>
        <button
          className="p-3"
          style={{ marginTop: "10vh" }}
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>


      <Footer />
    </div>
  );
}

export default Quiz;
