#!/usr/bin/node
// script that reads and prints the content of a file
const fs = require('fs').promises;

async function readFile (filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file ${error.message}`);
  }
}

readFile(process.argv[2]);
