import readlineSync from 'readline-sync';

const gameLogic = (playerName, introMessage, pairs) => {
  let winOrLoose = true;

  console.log(introMessage);

  for (let i = 0; i < pairs.length; i += 1) {
    const question = pairs[i][0];
    const correctAnswer = pairs[i][1];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      winOrLoose = false;
      break;
    }
  }

  if (winOrLoose) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default gameLogic;
