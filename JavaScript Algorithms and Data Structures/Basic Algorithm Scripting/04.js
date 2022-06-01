function findLongestWordLength(str) {
	let strArray = str.split(' ');
	let maxLength = 0;
	for (let i = 0; i < strArray.length; i++) {
		if (strArray[i].length > maxLength) {
			maxLength = strArray[i].length;
		}

	}
	return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");