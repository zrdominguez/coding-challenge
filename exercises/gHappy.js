module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
//similar to a sliding door algorithmn
//use two pointers that point to behind the current value
//and behind to see if 'g' is alone
	for(let i = 1; i < str.length; i++){
		let behind = i - 1;
		let front = i + 1;
		if(str[i] == 'g'){
			if(str[behind] != 'g' && str[front] != 'g'){
				return false;
			}
		}
	}
	return true;
};
