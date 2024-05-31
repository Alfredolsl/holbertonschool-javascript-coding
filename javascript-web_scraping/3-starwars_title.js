#!/usr/bin/node
// script that prints the title of a Star Wars movie where the episode number matches a given integer (id)
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const id = process.argv[2];

request({ url: `${url}${id}`, json: true }, (error, response, body) => {
  if (error) {
    console.error('Error fetching the URL:', error);
    return;
  }
  console.log(body.title);
});
