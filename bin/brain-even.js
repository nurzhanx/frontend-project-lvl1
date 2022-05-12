#!/usr/bin/env node
import welcomeUser from '../src/cli.js';
import brainEvenGame from '../src/brainEvenGame.js';

const userName = welcomeUser();

brainEvenGame(userName);
