const { default: axios } = require("axios");

module.exports.run = function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/

	// made an async function call to handle the axios get request
	return (async () => {
		try{
			const arr = [];

	//for every movie fetched, destructure that object for the Title,
	//Year and Genre then push it into our result array
			for(const movie of movies){
				const res = await axios.get(movie);
				const { Title, Year, Genre } = res.data;
				arr.push({Title, Year, Genre});
			}

	//added try catch to simulate practical coding habit
		}catch(e){
			return `Error: ${e.message}`;
		}
		return arr
	})();

};
