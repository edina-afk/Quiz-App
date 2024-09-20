import React, { useState,useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import  {Questions } from '../Helpers/QuestionBank';
import "../App.css";
export default function Quiz() {
 
  const {score,setScore,setGameState} = useContext(QuizContext)

   const [currentQuestion,setCurrentQuestion] = useState(0)
   const [optionChosen,setOptionChosen] = useState("")

   const nextQuestion = ()=>{
      if(Questions[currentQuestion].answer == optionChosen) {
        setScore(score + 1);
      }
      
      setCurrentQuestion(currentQuestion + 1);
      setOptionChosen(""); 
}

const finishQuiz = ()=>{
  if(Questions[currentQuestion].answer == optionChosen) {
    setScore(score + 1);
  }
  
  setGameState("endScreen");

  
}
  return (
    <div className='quiz'>
       
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
       <button 
        className={`option-button ${optionChosen === "A" ? "selected" : ""}`}
        onClick={()=>setOptionChosen("A")}>{Questions[currentQuestion].optionA}
       </button>
       <button 
        className={`option-button ${optionChosen === "B" ? "selected" : ""}`}
        onClick={()=>setOptionChosen("B")}>{Questions[currentQuestion].optionB}
      </button>
       <button
        className={`option-button ${optionChosen === "C" ? "selected" : ""}`}
        onClick={()=>setOptionChosen("C")}>{Questions[currentQuestion].optionC}
      </button>
       <button 
        className={`option-button ${optionChosen === "D" ? "selected" : ""}`}
       onClick={()=> setOptionChosen("D")}>{Questions[currentQuestion].optionD}
       </button>
      </div>

      {currentQuestion == Questions.length - 1 ?(<button onClick={finishQuiz}>Finish Quiz</button>):(

      <button onClick={nextQuestion}>Next Question</button>
      )}
       </div>
  )
}
