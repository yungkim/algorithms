// Swap positions of successive pairs of values of given array.
// If length is odd, do not change the final element.
// For [1,2,3,4], return [2,1,4,3].
// For example, change input ["Brendan", true, 42] to [true, "Brendan", 42].
// As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    for (var i = 0; i < arr.length -1; i+=2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i+1] = temp;
    }
    return arr;
}

console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan", true, 42]));

// [nodemon] starting `node 05_array_swap_pairs.js`
// [ 2, 1, 4, 3 ]
// [ true, 'Brendan', 42 ]
// [nodemon] clean exit - waiting for changes before restart