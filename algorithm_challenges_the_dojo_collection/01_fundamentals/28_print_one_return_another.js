// Build a function that takes array of numbers. 
// The function should print second-to-last value in the array, 
// and return first odd value in the array.

function printOneReturnAnother(array) {
    console.log(array[array.length-2]);
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            return array[i];
        }
    }
}

console.log("First odd value in the array", printOneReturnAnother([1,2,3,4,5,6,7,8]));

// [nodemon] starting `node 28_print_one_return_another.js`
// 7
// First odd value in the array 1
// [nodemon] clean exit - waiting for changes before restart