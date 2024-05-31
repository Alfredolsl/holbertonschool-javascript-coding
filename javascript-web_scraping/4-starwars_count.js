#!/usr/bin/node
const request = require('request');
const url = `${process.argv[2]}`;

request({ url: `${url}`, json: true }, (error, response, body) => {
  if (error) {
    console.error('Error fetching the URL:', error);
    return;
  }
  const results = body.results;
  let appearances = 0;
  for (let i = 0; i < results.length; i++) {
    const characters = results[i].characters;
    for (let j = 0; j < characters.length; j++) {
      if (characters[j].includes('18')) {
        appearances++;
      }
    }
  }
  console.log(appearances);
});
