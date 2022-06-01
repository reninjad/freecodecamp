function largestOfFour(arr) {
	let arrayOfMax = [];
	for (let i = 0; i < arr.length; i++) {
		let maxNumber = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > maxNumber) {
				maxNumber = arr[i][j];
			}
		}
		arrayOfMax.push(maxNumber);
	}
	return arrayOfMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);