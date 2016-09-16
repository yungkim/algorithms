// Given an array, 
// create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1).
// Given [1, -3, 5], return [-1, -3, -5].

function outlookNegative(arr) {
    var result_array = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= -1;
        }
    }
    return arr;
}

console.log(outlookNegative([1, -3, 5]));

// [nodemon] starting `node 36_outlook_negative.js`
// [ -1, -3, -5 ]
// [nodemon] clean exit - waiting for changes before restart