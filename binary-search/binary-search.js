"use strict";

// Complete this algo
const binarySearch = (array, target) => {
	let startInd = 0;
	let endInd = array.length - 1;

	const midpoint = function(startInd, endInd) {
		return Math.floor((endInd - startInd) / 2) + startInd;
	};
	let midInd = midpoint(startInd, endInd);

	if (target > array[endInd]) return false;
	if (target < array[startInd]) return false;

	while (endInd - startInd > 1) {
		if (
			target === array[midInd] ||
			target === array[startInd] ||
			target === array[endInd]
		)
			return true;
		if (target < array[midInd]) {
			endInd = midInd;
			midInd = midpoint(startInd, endInd);
		} else if (target > array[midInd]) {
			startInd = midInd;
			midInd = midpoint(startInd, endInd);
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
