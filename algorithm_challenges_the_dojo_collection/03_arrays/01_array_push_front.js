// Given array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.

function pushFront(arr, val) {
    var temp = arr[0];
    var temp2 = "";

    for (var i = 1; i < arr.length; i++) {
        temp2 = arr[i];
        arr[i] = temp;
        temp = temp2;
    }
    arr[0] = val;
    arr[arr.length] = temp;

    return arr;
}

console.log(pushFront([1, 2, 3, 4, 5],0));

// [nodemon] starting `node 01_array_push_front.js`
// [ 0, 1, 2, 3, 4, 5 ]
// [nodemon] clean exit - waiting for changes before restart