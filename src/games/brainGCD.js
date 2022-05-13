import gameLogic from '../gameLogic.js';
import welcomeUser from '../cli.js';

const brainGCD = () => {
  const playerName = welcomeUser();
  const introMessage = 'Find the greatest common divisor of given numbers.';
  const pairs = [];

  for (let i = 0; i < 3; i += 1) {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    const question = `${x} ${y}`;

    while (y) {
      const temp = y;
      y = x % y;
      x = temp;
    }

    const correctAnswer = String(x);
    const pair = [question, correctAnswer];

    pairs.push(pair);
  }

  gameLogic(playerName, introMessage, pairs);
};

export default brainGCD;
