// quiz.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questionList'; // Import the array of questions

function Quiz() {
  const navigate = useNavigate(); 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result'); 
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <p>{currentQuestion.question}</p>
        <div>
          {currentQuestion.answers.map((answer, index) => (
            <label key={index}>
              <input type={currentQuestion.type === 'multiple' ? 'checkbox' : 'radio'} name="answer" />
              {answer}
            </label>
          ))}
        </div>
        <button onClick={goToNextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default Quiz;
