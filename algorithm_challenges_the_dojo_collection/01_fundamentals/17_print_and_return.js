// Your function will receive an array with two numbers.
// Print the first value, and return the second.

function printAndReturn(array) {
    console.log(array[0]);
    return array[1];
}

console.log(printAndReturn([1, 2]));

// [nodemon] starting `node 17_print_and_return.js`
// 1
// 2
// [nodemon] clean exit - waiting for changes before restart