#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const id = process.argv[2];

request({url: `${url}${id}`, json: true}, (error, response, body) =>
  console.log(body['title'])
);
