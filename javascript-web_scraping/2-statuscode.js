#!/usr/bin/node
const url = process.argv[2];

async function get_status_code(url) {
	const response = await fetch(url, {method: 'GET'});
	const code = await response.status;
	console.log(`code: ${code}`);
}

get_status_code(url)
