import React, { useState, useEffect } from "react";
import "../styles/_quiz.css";
import questions from '../javascript/questions.js'
import NavigationBar from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx"
import Footer from "../components/Footer.tsx";
import biasBg from "../assets/biasrealitycheck/thinkingStylesInfo.png"

function GeneralQuiz() {

  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setLoading] = useState(true);
  
  
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
    });
  });


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

  return (
    <div className="App container-fluid p-0" style={{overflow: 'hidden'}}>
      <NavigationBar/>
      <Chatbot/>
      <img src={biasBg}/>
      <div className="row">
        <div className="col" style={{backgroundImage: ``}}>
            
        </div>
        <div className="col">
            
        </div>  
    
      </div>  
      <div className="Quiz text-center" style={{marginTop: '18vh'}}>

        <h3>Bias Reality Check!</h3>
        <h2 id="score">Score: {score}</h2>
        <div className="card my-4" style={{height: '50vh'}}>
                  <div className="card-body">
                    {/* Show results or show the question game  */}
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
          ) : (
          /* Question Card  */
            <div className="question-card">
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className="question-text">{questions[currentQuestion].text}</h3>

              {/* List of possible answers  */}
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="card-text m-2 w-50 mx-auto border-dark"
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
            )}
          </div>
        </div>   
      </div>
      <Footer/>
    </div>
  );
}

export default GeneralQuiz;