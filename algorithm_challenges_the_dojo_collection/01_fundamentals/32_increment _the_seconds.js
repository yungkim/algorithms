// Given an array of numbers arr, 
// add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).
// Afterward, console.log each array value and return arr.

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 == 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementTheSeconds([0, 0, 0, 0, 0]));

// [nodemon] starting `node "32_increment _the_seconds.js"`
// 0
// 1
// 0
// 1
// 0
// [ 0, 1, 0, 1, 0 ]
// [nodemon] clean exit - waiting for changes before restart