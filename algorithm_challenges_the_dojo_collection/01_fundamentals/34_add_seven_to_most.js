// Build function that accepts array. Return a new array with all values except first, 
// adding 7 to each. Do not alter the original array.

function addSevenToMost(arr) {
    var result_arr = [];
    for (var i = 1; i < arr.length; i++) {
        result_arr.push(arr[i]+7);
    }
    return result_arr;
}

console.log(addSevenToMost([0,1,2,3,4,5]));

// [nodemon] starting `node 34_add_seven_to_most.js`
// [ 8, 9, 10, 11, 12 ]
// [nodemon] clean exit - waiting for changes before restart