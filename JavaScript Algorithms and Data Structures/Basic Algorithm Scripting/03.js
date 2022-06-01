function factorialize(num) {
	let multiply = 1;
	for (let i = 1; i <= num; i++) {
		multiply *= i;
	}

	return multiply;
}

factorialize(5);