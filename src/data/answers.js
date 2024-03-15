import questions from './questionList';
const attributes = [0, 0, 0, 0, 0, 0, 0];


function processAnswers() {
  for (let question of questions) {
    for (let answer of question.answers) {
      const index = question.answers.indexOf(answer); 
      attributes[index] += 1; 
    }
  }
}

processAnswers();

export default attributes;