import React ,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css";
export default function MainMenu() {
  const {gameState,setGameState} = useContext(QuizContext)
  return (
    <div className='menu'>
       <button onClick={() => {
  console.log("Button clicked"); // Check if the button click works
  setGameState("quiz"); // Check if this function gets called
}}>
  Start Quiz
</button>

    </div>
  )
}
