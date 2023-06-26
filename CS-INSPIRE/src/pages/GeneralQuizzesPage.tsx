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
import bgIcon from "../assets/quiz/generalQuizIcon.svg"
import pastelBg from "../assets/pastelGreyBg.png"
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, updateEmail, signOut } from "firebase/auth";

function GeneralQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [id, setId] = useState("")
  const [explanation, setExplanation] = useState("")
  const [emoji, setEmoji] = useState("")
  const [isLoading, setLoading] = useState(true);
  const [pauseStatus, setPauseStatus] = useState(false);
  const [quizStatus, updateQuizStatus] = useState("completed")
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
    setExplanation(questions[currentQuestion].explanation)
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      setEmoji("✔️")
    }
    else {
      setEmoji("❌")
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  function writeToDatabase () {
    console.log(quizStatus);
    console.log("writing to database..");
    const db = getDatabase()
    console.log(db)
    update(ref(db, id, "/generalQuizStatus/"), {
      generalQuizStatus: quizStatus,
    }).catch(alert);
  }
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setEmoji("");
    setCurrentQuestion(0);
    setShowResults(false);
    updateQuizStatus("completed")
    writeToDatabase()
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
          style={{ marginTop: "9vh", backgroundImage: `url(${pastelBg})`}}
        >
          {/* <h2 className="pt-4 mb-2 text-start" style={{marginLeft: '2vw'}}>Unconscious Bias Quiz</h2> */}
          
          <img src={bgIcon} alt="quizBgIcon" style={{float: 'left'}}/>

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
          <div className="card tab-content" style={{border: 'none'}}>
            <div className="card tab-content">
              <div className="card tab-content">
                {showResults ? (
                  /* 4. Final Results */
                  <div className="final-results">
                    <h1>Final Results</h1>
                    <h2 style={{border: 'none'}}>
                      {score} out of {questions.length} correct - (
                      {(score / questions.length) * 100}%)
                    </h2>
                    <button onClick={() => restartGame()}>Restart Quiz</button>
                  </div>
                ) : (
                  
                // <div
                //   className="tab-pane card-block active"
                //   id="ONE"
                //   style={{
                //     background: `url(${question1})`,
                //     backgroundSize: 'cover',
                //     height: "500px",
                //     paddingBottom: "5px",
                //     overflow: "hidden",
                //   }}
                // >
                  <div className="row" style={{height: ""}}>
                    <div className="col-md-4 p-0" style={{ height: "5vh"}}>
                      <div className="card bg-faded">
                        <div className="card-block">
                          <h4 id="score" style={{borderRadius: '0px', marginBottom: '5px'}}>Score: {score} {emoji}</h4>
                          <div className="progress" style={{}}>
                            <div
                              className="progress-bar"
                              style={{ backgroundColor: "grey", width: "75%" }}
                            >
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 p-0">
                      <div className="p-0 question-card" style={{ height: "10vh", fontSize: '20px'}}>
                        {/* Current Question  */}
                        <p className="m-auto py-auto" style={{height: "5vh"}}>
                          Question: {currentQuestion + 1} out of{" "}
                          {questions.length}
                        </p>
                      </div>
                    </div>
                    <div className="card card-inverse card-success" style={{width: '100vw', borderRadius: 0, border: 'none', overflow: 'hidden'}}>
                  <h5
                    className="card-block text-dark mt-5 w-75 mx-auto bg-light"
                    style={{ textAlign: "center", height: '20vh', fontSize: '30px', backgroundColor: ''}}
                  >
                    {questions[currentQuestion].text}
                  </h5>
                </div>
                {/* {explanation} */}
                <ul style={{ backgroundColor: 'aliceblue'}}>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        className="card-text m-2 w-50 mx-auto "
                        style={{ border: '', listStyleType: "none", backgroundColor: "" }}
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                      
                    );
                  })}
                </ul>
                  </div>
              
                )}
       
              </div>
            </div>
          </div>

   
        </div>
      ) : (
        <div style={{ marginTop: "18vh", height: '90vh' }}>
          <h1 className="mb-2">Unconscious Bias Quiz</h1>
          <p className="lead">Take this quiz to test your knowledge on unconscious bias</p>
          <button onClick={displayQuiz}>Start</button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GeneralQuiz;
