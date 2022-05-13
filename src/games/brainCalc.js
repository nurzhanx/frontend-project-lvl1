import gameLogic from '../gameLogic.js';

const brainCalc = () => {
  const introMessage = 'What is the result of the expression?';
  const pairs = [];

  for (let i = 0; i < 3; i += 1) {
    const pair = [];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${x} ${operator} ${y}`;
    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = x + y;
        break;
      case '-':
        correctAnswer = x - y;
        break;
      case '*':
        correctAnswer = x * y;
        break;
      default:
        break;
    }

    pair.push(question);
    pair.push(String(correctAnswer));
    pairs.push(pair);
  }

  gameLogic(introMessage, pairs);
};

export default brainCalc;
