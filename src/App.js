
import { useState } from 'react';
import './App.css';

function App() {
  const [showFinalResult,setFinalResult] = useState(false)
  const [score,setScore] = useState(0);
  const [currectQustion, setCurrentQustion] = useState(0);

  //Qustions

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const optionClick= (iscorrect)=>{
    if(iscorrect){
      setScore(score+1)
    }

    if(currectQustion+1 <questions.length){
      setCurrentQustion(currectQustion+1);
    }else{
      setFinalResult(true)
    }
    
  }
  const restartGame=()=>{
    setCurrentQustion(0);
    setFinalResult(false);
    setScore(0);
  }

  return (
    <div className="App">

      <h1>Geek Quize</h1>
      <h2>current score: {score}</h2>
      {showFinalResult ? (
        <div className='finalResult'>
        <h1>Final Result</h1>
        <h2>
          {score} out of {questions.length} correct - ({(score/questions.length) * 100}%)
        </h2>
        <button onClick={()=>restartGame()}>Restart Game</button>
      </div>
      ):(
        <div className='question-card'>
      <h2>Qustions {currectQustion +1} out of {questions.length}</h2>
      <h3 className='question'>{questions[currectQustion].text}</h3>
      <ul>
        { questions[currectQustion].options.map((option)=>{
          return(
            <li onClick={()=>optionClick(option.isCorrect)} key={option.id}>{option.text}</li>
          )
        })}
      </ul>
      </div>
      )}
      

      
    </div>
  );
}

export default App;
