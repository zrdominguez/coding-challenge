
module.exports.run = function(x, y) {
/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
const twoDArray = [[0,  4,  2,  1],
		   [3, -1,  1,  0],
		   [0,  0,  2,  3],
		   [1,  3, -3,  0]];

	let sum = 0;
	
	//created nested loop to iterate over columns first then rows
	// x and y being inclusive in this case and added to sum
	for(let i = 0; i <= y; i++){
		let row = twoDArray[i];
		for(let j = 0; j <= x; j++){
			sum += row[j]
		}
	}

	return sum;
};
