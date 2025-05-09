const axios = require('axios');

module.exports.run = function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/

	//make a get request with axios, .then chain to mimic a returned response
	//then .catch to catch error.
	// could also use try catch here
	return axios.get(url)
	.then(response => response)
	.catch(e => `Error: ${e.message}`);
};
