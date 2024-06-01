const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', name => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing')
  rl.close();
});
