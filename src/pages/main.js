import React from 'react';
import { Link } from 'react-router-dom';

// const {Header, Content, Footer} = Layout


function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the Main Page of the Quiz App!</p>
      <Link to="/welcome">Start Quiz</Link>
    </div>
  );
}

export default Main;
