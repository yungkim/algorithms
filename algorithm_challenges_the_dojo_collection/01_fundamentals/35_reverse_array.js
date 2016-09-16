// Given array, write a function that reverses values, in-place.
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverse([3,1,6,4,2]));

// [nodemon] starting `node 35_reverse_array.js`
// [ 2, 4, 6, 1, 3 ]
// [nodemon] clean exit - waiting for changes before restart