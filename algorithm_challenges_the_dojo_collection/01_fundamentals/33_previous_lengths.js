// You are passed an array containing strings.
// Working within that same array, replace each string with a number
// - the length of the string at previous array index - and return the array.

function previousLength(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }
    return arr;
}

console.log(previousLength(["a","ab","abc"]));

// [nodemon] starting `node 33_previous_lengths.js`
// [ 1, 2, 3 ]
// [nodemon] clean exit - waiting for changes before restart