// Given an array, write a function that changes all positive numbers in the array to "big".
// Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array
}

console.log(biggieSize([-1, 3, 5, -5]));

// [nodemon] starting `node 26_biggie_size.js`
// [ -1, 'big', 'big', -5 ]
// [nodemon] clean exit - waiting for changes before restart