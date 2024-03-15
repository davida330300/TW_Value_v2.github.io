import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>This is the welcome page of the Quiz App.</p>
      <p>Click on the button below to start the quiz!</p>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
}

export default Welcome;
