import readlineSync from 'readline-sync';

const brainEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winOrLoose = true;

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      winOrLoose = false;
      break;
    }
  }

  if (winOrLoose) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default brainEvenGame;
