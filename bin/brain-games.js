#!/usr/bin/env node
import helloUser from '../src/cli.js';
import brainEvenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');

const userName = helloUser();

brainEvenGame(userName);
