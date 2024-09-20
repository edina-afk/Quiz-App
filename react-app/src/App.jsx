import React, { useState } from 'react';
import { QuizContext } from './Helpers/Contexts';
import MainMenu from './components/MainMenu';
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreen"
import "./App.css";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ gameState, setGameState,score,setScore }}>
      <div className="App">
           <h1>Quiz APP</h1>
        {gameState === "menu" &&  <MainMenu/>}
        {gameState === "quiz" &&  <Quiz/>}
        {gameState === "endScreen" &&  <EndScreen/>}
      </div>
    </QuizContext.Provider>
  );
}

export default App;

