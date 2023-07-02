import React, { useState, useEffect } from "react";
// import "../styles/_quiz.css";
import questions from "../Javascript/questions.js";
import NavigationBar from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx";
import Footer from "../components/Footer.tsx";
import useSound from "use-sound";
import bgSound from "../assets/bg_music.mp3";
import { FaMusic, FaStop } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import bgIcon from "../assets/quiz/generalQuizIcon.png";
import faqIcon from "../assets/quiz/faqIcon.svg";
import pastelBg from "../assets/pastelGreyBg.png";
import quizzesBg from "../assets/quiz/quizBg.svg";
import greyBg from "../assets/pastelGreyBg.png";
import "../styles/_quiz.css";
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, updateEmail, signOut } from "firebase/auth";

function GeneralQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [id, setId] = useState("");
  const [explanation, setExplanation] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [pauseStatus, setPauseStatus] = useState(false);
  const [quizStatus, updateQuizStatus] = useState("completed");
  const [scorewidth, setScoreWidth] = useState(0);
  const [play, { stop }] = useSound(bgSound, {
    interrupt: true,
  });

  const auth = getAuth();
  const user = auth.currentUser;

  const handleStop = () => {
    setPauseStatus(true);
    stop();
  };

  const handlePlay = () => {
    setPauseStatus(false);
    play();
  };

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

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setId(user.uid);
      });
    }

    if (pauseStatus === false) {
      // play();
    } else {
      stop();
    }
  });

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    setExplanation(questions[currentQuestion].explanation);
    console.log((score / questions.length) * 100);
    setScoreWidth((score / questions.length) * 100);
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      setEmoji("✔️");
    } else {
      setEmoji("❌");
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
    console.log(questions.length);


  };

  function writeToDatabase() {
    console.log("writing to database..");
    const db = getDatabase();
    update(ref(db, id, "/quiz/generalQuizStatus/"), {
      generalQuizStatus: quizStatus,
    }).catch(alert);

    if (showResults) {
      const db = getDatabase();
      update(ref(db, id, "/quiz/score/"), {
        score: score,
      }).catch(alert);
    }
  }
  /* Resets the game back to default */
  const restartGame = () => {
    setExplanation("");
    setScore(0);
    setScoreWidth(0);
    setEmoji("");
    setCurrentQuestion(0);
    setShowResults(false);
    updateQuizStatus("completed");
    writeToDatabase();
  };

  const displayQuiz = () => {
    setStart(true);
    play();
  };

  return (
    <div className="App container-fluid p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <Chatbot />
      {start ? (
        <div
          className="Quiz text-center text-dark"
          style={{
            marginTop: "6vh",
            height: "100vh",
            backgroundImage: `url(${faqIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          {/* <h2 className="pt-4 mb-2 text-start" style={{marginLeft: '2vw'}}>Unconscious Bias Quiz</h2> */}

          {/* <img src={bgIcon} alt="quizBgIcon" style={{float: '', height: ''}}/> */}

          <button
            onClick={handlePlay}
            className=""
            style={{ backgroundColor: "transparent", borderRadius: "50%" }}
          >
            <FaPlay style={{ color: "black" }} />
          </button>
          <button
            onClick={handleStop}
            style={{ backgroundColor: "transparent", borderRadius: "50%" }}
          >
            <FaStop style={{ color: "black" }} />
          </button>
          <div className="card tab-content" style={{ border: "none" }}>
            <div className="card tab-content">
              <div className="card tab-content">
                {showResults ? (
                  /* 4. Final Results */
                  <div className="final-results">
                    <h1>Final Results</h1>
                    <h2 style={{ border: "none" }}>
                      {score} out of {questions.length} correct - (
                      {(score / questions.length) * 100}%)
                    </h2>
                    <button onClick={() => restartGame()}>Restart Quiz</button>
                  </div>
                ) : (
                  <div
                    className="tab-pane card-block active"
                    id="ONE"
                    style={{
                      boxShadow: "1px solid black",
                      overflow: "hidden",
                      float: "right",
                      display: "flex",
                      alignItems: "center",
         
                    }}
                  >
                    <div className="row" style={{ height: "80vh" }}>
                      <div className="col-md-4 p-0" style={{ height: "5vh" }}>
                        <div className="card bg-faded">
                          <div className="card-block">
                            <h4
                              id="score"
                              style={{
                                borderRadius: "0px",
                                marginBottom: "5px",
                              }}
                            >
                              Score: {score} {emoji}
                            </h4>

                            <div className="progress" style={{}}>
                              <div
                                className="progress-bar"
                                style={{
                                  backgroundColor: "lightgreen",
                                  width: `${scorewidth}%`,
                                }}
                              >
                                <br />
                              </div>
                            </div>
                            <span
                              style={{ fontSize: "0.9rem", fontWeight: "300" }}
                            >
                              {explanation}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 p-0">
                        <div
                          className="p-0 question-card"
                          style={{ height: "10vh", fontSize: "20px" }}
                        >
                          {/* Current Question  */}
                          <p
                            className="m-auto py-auto"
                            style={{ height: "5vh" }}
                          >
                            Question: {currentQuestion + 1} out of{" "}
                            {questions.length}
                          </p>
                        </div>
                      </div>
                      <div
                        className="card card-inverse card-success p-0"
                        style={{
                          width: "100vw",
                          borderRadius: 0,
                          border: "none",
                          overflow: "hidden",
                          height: "fit-content",
                        }}
                      >
                        <h5
                          className="card-block text-dark w-75 my-auto mx-auto bg-light"
                          style={{
                            textAlign: "center",
                            height: "fit-content",
                            fontSize: "40px",
                            backgroundColor: "",
                            padding: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {questions[currentQuestion].text}
                        </h5>
                      </div>

                      <ul
                        style={{
                          backgroundColor: "",
                          height: "fit-content",
                          alignItems: "center",
                        }}
                      >
                        <div className="row m-0">
                          {questions[currentQuestion].options.map((option) => {
                            return (
                              <div className="col">
                                <li
                                  className="quiz-card-text p-2 m-3 text-dark mx-auto w-75 my-auto"
                                  style={{
                                    border: "solid 1px",
                                    borderRadius: "5px",
                                    listStyleType: "none",
                                  }}
                                  key={option.id}
                                  onClick={() =>
                                    optionClicked(option.isCorrect)
                                  }
                                >
                                  {option.text}
                                </li>
                              </div>
                            );
                          })}
                        </div>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="text-center"
          style={{
         
          }}
        >
  
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
          <br />
          <button
            className="p-3"
            style={{ marginTop: "10vh" }}
            onClick={displayQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GeneralQuiz;
