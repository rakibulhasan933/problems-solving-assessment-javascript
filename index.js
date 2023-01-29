// Rotate Left Function
function rotateLeft(array, number) {

	const length = array.length;
	let template = new Array(length);

	let r = 0;

	// storing the length - rotatingNumber elements of
	for (let i = number; i < length; i++) {
		template[r] = array[i];
		r++;
	};

	// storing the first rotatingNumber elements of array 
	for (let i = 0; i < number; i++) {
		template[r] = array[i];
		r++;
	};
	//Printing the template array which stores the result
	for (let i = 0; i < length; i++) {
		console.log(template[i] + " ");
	};
};
// Input
rotateLeft([1, 2, 3, 4, 5], 4);
