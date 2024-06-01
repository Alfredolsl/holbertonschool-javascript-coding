const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: null,
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
