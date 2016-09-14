// Create a function that accepts a number as an input. 
// Return a new array that counts down by one, from the number (as array's 'zero'th element) down to 0 (as the last element).
// How long is this array?

function countdown(number) {
    var array = [];
    for (var i = number; i >= 0; i--) {
        array.push(i);
    }
    return array;
}

console.log(countdown(10));

// [nodemon] starting `node 16_countdown.js`
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
// [nodemon] clean exit - waiting for changes before restart