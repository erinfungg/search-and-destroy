"use strict";

// Complete this algo
const minJumps = arr => {
	let jumps = 0;
	let steps = arr[0];
	let maxReach = arr[0];

	for (let i = 1; i < arr.length - 1; i++) {
		maxReach = Math.max(maxReach, arr[i] + i);
		steps--;
		if (steps === 0) {
			jumps++;
			steps = maxReach - i;
		}
	}
	console.log(jumps + 1);
	return jumps + 1;
};

module.exports = minJumps;
