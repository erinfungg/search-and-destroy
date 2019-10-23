"use strict";

//Complete this algo
const isLoop = linkedlist => {
	let tort = linkedlist.head;
	let hare = linkedlist.head;

	while (tort.next) {
		if (hare.next) {
			tort = tort.next;
			hare = hare.next.next;
			if (tort === hare) return true;
		} else {
			return false;
		}
	}
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
