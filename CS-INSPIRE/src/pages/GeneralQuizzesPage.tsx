import React, { useState, useEffect } from "react";
// import "../styles/_quiz.css";
import questions from '../javascript/questions.js'
import NavigationBar from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx"
import Footer from "../components/Footer.tsx";
import useSound from "use-sound"
import bgSound from "../assets/bg_music.mp3"
import { FaMusic, FaStop } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";



function GeneralQuiz() {

  // Properties
  const [showResults, setShowResults] = useState(false);
  const [start, setStart] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [pauseStatus, setPauseStatus] = useState(false)
  const [play, {stop}] = useSound(bgSound, {
    interrupt: true 
  });

  const handleStop = () => {
    setPauseStatus(true)
    stop();
  }

  const handlePlay = () => {
    setPauseStatus(false)
    play();
  }

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    }
  );})

  useEffect(() => {
    
    console.log(pauseStatus)
    if (pauseStatus === false){
      play();}
    else {
      stop();
    }
  })


  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  
  };

  const displayQuiz = () => {
    setStart(true)
    play()
  }

  return (
    <div className="App container-fluid p-0" style={{overflow: 'hidden'}}>
      <NavigationBar/>
      <Chatbot/>
    {start ? (
        <div className="Quiz text-center text-dark" style={{marginTop: '18vh'}}>
        <h1 className="mb-2">Unconscious Bias Quiz</h1>
        
        <button onClick={handlePlay} className="" style={{backgroundColor: 'transparent', borderRadius: '50%'}}><FaPlay style={{color: 'black'}}/></button>
        <button onClick={handleStop} style={{backgroundColor: 'transparent', borderRadius: '50%'}}><FaStop style={{color: 'black'}}/></button>
        <div className="card tab-content">
        
        <div className="card tab-content">

            <div className="card tab-content bg-dark">
            
              {showResults ? (
                                        /* 4. Final Results */
                                        <div className="final-results">
                                          <h1>Final Results</h1>
                                          <h2>
                                            {score} out of {questions.length} correct - (
                                            {(score / questions.length) * 100}%)
                                          </h2>
                                          <button onClick={() => restartGame()}>Restart Quiz</button>
                                        </div>
                                      ) : ("")}
                <div className="tab-pane card-block active" id="ONE" style={{background: `url()`, height: "560px", paddingBottom: "5px", overflow:"hidden"}}>
                    <div className="row">
                      <div className="col-md-4">
                          <div className="card bg-faded">
                              <div className="card-block">
                                  <h2 id="score">Score: {score}</h2>
                                  <div className="progress" style={{}}>
                                      <div className="progress-bar" style={{backgroundColor: 'grey', width: "75%"}}>
                                          <br/>
                                      </div>
                          
                                  </div>

                              </div>
                            
                          </div>
                      </div>
                      <div className="col-8">
                        <div className="question-card" style={{height: '8vh'}}>
                              {/* Current Question  */}
                              <p style={{marginBottom: '5px'}}>
                                Question: {currentQuestion + 1} out of {questions.length}
                              </p>
                                          
                          </div>
                      </div>
                  </div>
                
                </div>
              
            
                <div className="card card-inverse card-success">
                    <h1 className="card-block text-dark" style={{textAlign: 'center'}}>{questions[currentQuestion].text}</h1>
                </div>

                <ul>
                    {questions[currentQuestion].options.map((option) => {
                      return (
                        <li
                          className="card-text m-2 w-50 mx-auto border"
                          style={{listStyleType: 'none', backgroundColor: ''}}
                          key={option.id}
                          onClick={() => optionClicked(option.isCorrect)}
                        >
                          {option.text}
                        </li>
                      );
                    })}
                  </ul>
            </div>
        </div>
        </div>


        <p style={{textAlign: 'right'}}><a href="https://toyhou.se/Unicore" id=""><i className="fas fa-code"></i></a></p>


          
        </div>
    ): (<div style={{marginTop: '18vh'}}>
      
          <button onClick={displayQuiz}>Start</button>
        </div>)}
     
      <Footer/>
    </div>
  );
}

export default GeneralQuiz;