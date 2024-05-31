#!/usr/bin/node
// script that computes the number of tasks completed by user id
// only print users with completed tasks
const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching the URL:', error);
    return;
  }
  const tasksDoneByUsers = {};
  const json = JSON.parse(body);

  for (let i = 0; i < json.length; i++) {
    const userID = json[i].userId;
    const completed = json[i].completed;

    // check if user is not in tasksDoneByUsers to add user
    if (!(userID in tasksDoneByUsers) && completed) {
      tasksDoneByUsers[userID] = 0;
    }
    // check if task is completed
    if (completed) {
      ++tasksDoneByUsers[userID];
    }
  }
  console.log(tasksDoneByUsers);
});
