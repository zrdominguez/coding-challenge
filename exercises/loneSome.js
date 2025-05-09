module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
//turn parameters in an iterable object
	const arr = [a, b, c];

//use a map to keep track of duplicates
	const seen = new Map();
	let sum = 0;

//add all parameters to the map, if its a dupe update value
	for(let i = 0; i < arr.length; i++){
		const key = arr[i];
		if(!seen.get(key)) seen.set(key, 1);
		else seen.set(key, seen.get(key) + 1);
	}

//for every value that is unique that is unique add to the sum
	seen.forEach((val, key) => {
		if(seen.get(key) === 1) sum += key;
	})

	return sum;

	//Proto-Type Brute Force
	// for(let i = 0; i < arr.length; i++){
	// 	const key = arr[i].toString();
	// 	const val = arr[i];
	// 	if(!seen.get(key)){
	// 		seen.set(key, val);
	// 		res += val;
	// 	}else{
	// 		res -= val;
	// 	}
	// }
};
