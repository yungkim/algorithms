// Write a function that accepts any array, 
// and returns a new array with the array values that are greater than its 2nd value.
// Print how many values this is. What will you do if the array is only one element long?

function valuesGreaterThanSecondGeneralized(array) {
    var new_array = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            new_array.push(array[i]);
        }
    }
    console.log(new_array.length + " values in result array");
    return new_array;
}

console.log(valuesGreaterThanSecondGeneralized([1,3,5,7,9,13]));

// [nodemon] starting `node 20_values_greater_than_second_generalized.js`
// 4 values in result array
// [ 5, 7, 9, 13 ]
// [nodemon] clean exit - waiting for changes before restart