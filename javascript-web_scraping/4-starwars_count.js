#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/people/18';

request({ url: `${url}`, json: true }, (error, response, body) => {
  if (error) {
    console.error('Error fetching the URL:', error);
    return;
  }
  console.log((body.films).length);
});
