import helloUser from '../src/cli.js';
import brainEvenGame from '../src/brainEvenGame.js';

console.log('Welcome to the Brain Games!');

const userName = helloUser();

brainEvenGame(userName);
