// Given array, create a function to return a new array 
// where each value in the original has been doubled.
// Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(array) {
    var result_array = [];
    for (var i = 0; i < array.length; i++ ) {
        result_array.push(array[i]*2);
    }
    return result_array;
}

console.log(double([1,2,3]));

// [nodemon] starting `node 29_double_vision.js`
// [ 2, 4, 6 ]
// [nodemon] clean exit - waiting for changes before restart