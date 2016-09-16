// Given array of numbers, 
// create function to replace last value with number of positive values.
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length-1] = count;
    return array;
}

console.log(countPositives([-1,1,1,1]));

// [nodemon] starting `node 30_count_positives.js`
// [ -1, 1, 1, 3 ]
// [nodemon] clean exit - waiting for changes before restart