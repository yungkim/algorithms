// For [1,3,5,7,9,13], print values that are greater than its 2nd value.
// Return how many values this is.

function valuesGreaterThanSecond(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            console.log(array[i]);
        }
    }
}

valuesGreaterThanSecond([1,3,5,7,9,13]);

// [nodemon] starting `node 19_values_greater_than_second.js`
// 5
// 7
// 9
// 13
// [nodemon] clean exit - waiting for changes before restart