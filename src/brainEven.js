import gameLogic from './gameLogic.js';
import welcomeUser from './cli.js';

const brainEven = () => {
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const pairs = [];

  for (let i = 0; i < 3; i += 1) {
    const pair = [];
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    pair.push(number);
    pair.push(correctAnswer);
    pairs.push(pair);
  }

  const playerName = welcomeUser();
  gameLogic(playerName, introMessage, pairs);
};

export default brainEven;
