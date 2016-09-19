// Given array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().

function popFront(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}

console.log(popFront([1, 2, 3, 4, 5]));

// [nodemon] starting `node 03_array_pop_front.js`
// [ 2, 3, 4, 5 ]
// [nodemon] clean exit - waiting for changes before restart