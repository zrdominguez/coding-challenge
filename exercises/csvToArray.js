module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

	const res = [];

	//destructure the array made by split to get the attributes of movie
	//and info
	const [attributeList, ...infoList] = csv.split("\n");

	//seperate each string in infoList by comma to elminate commas
	const info = infoList.map(info => info.split(","));

	//do the same for attributesList
	const attributes = attributeList.split(",");

	//for each piece of info assign it to the correct
	//attribute, then push the object to the resulting array
	for(let i = 0; i < info.length; i++){
		const obj = {};
		const data = info[i];
		for(let j = 0; j < attributes.length; j++){
			obj[attributes[j]] = data[j];
		}
		res.push(obj)
	}
	return res;
};
