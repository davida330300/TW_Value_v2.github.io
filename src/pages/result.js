import React from 'react';
import attributes from '../data/answers'; // Import the attributes array

function Result() {
  return (
    <div>
      <h1>Result</h1>
      <p>Attributes:</p>
      <ul>
        {attributes.map((value, index) => (
          <li key={index}>Attribute {index + 1}: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;