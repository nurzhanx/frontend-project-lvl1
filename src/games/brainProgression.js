import gameLogic from '../gameLogic.js';
import welcomeUser from '../cli.js';

const brainProgression = () => {
  const playerName = welcomeUser();
  const introMessage = 'What number is missing in the progression?';
  const pairs = [];

  for (let i = 0; i < 3; i += 1) {
    const step = Math.floor(Math.random() * 10);
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const progression = [];
    const pair = [];

    let x = Math.floor(Math.random() * 50);

    for (let j = 0; j < progressionLength; j += 1) {
      progression.push(String(x));
      x += step;
    }

    const randomElementId = Math.floor(Math.random() * progressionLength);
    const correctAnswer = progression[randomElementId];
    progression[randomElementId] = '..';
    const question = progression.join(' ');

    pair.push(question);
    pair.push(correctAnswer);
    pairs.push(pair);
  }

  gameLogic(playerName, introMessage, pairs);
};

export default brainProgression;
