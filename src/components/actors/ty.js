var arr = [
	[2, 3],
	[3, 4],
	[4, 5],
];
arr.forEach((elt) => {
	elt[0] = elt[0] + 2;
});
console.log(arr);
