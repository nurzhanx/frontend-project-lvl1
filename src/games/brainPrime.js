import gameLogic from '../gameLogic.js';

const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const brainProgression = () => {
  const introMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const pairs = [];

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 2000);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    const pair = [];
    pair.push(question);
    pair.push(correctAnswer);
    pairs.push(pair);
  }

  gameLogic(introMessage, pairs);
};

export default brainProgression;
