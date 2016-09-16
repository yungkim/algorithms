// Create a function that takes array of numbers.
// The function should print the lowest value in the array,
// and return the highest value in the array.

function printLowReturnHigh(array) {
    var lowest = array[0];
    var highest = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];        
        } else if (array[i] > highest) {
            highest = array[i];        
        }
    }
    console.log("Lowest", lowest);
    return highest
}

console.log("Highest", printLowReturnHigh([2, 5, 6, 1, 3, 4, 7]));

// [nodemon] starting `node 27_print_low_return_high.js`
// Lowest 1
// Highest 7
// [nodemon] clean exit - waiting for changes before restart