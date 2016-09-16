// Given array, swap first and last, third and third-to-last, etc.
// Input [true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardTheCenter(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        if (left % 2 ==0) {
            var temp = arr[left];
            arr[left]= arr[right];
            arr[right] = temp;
        }
        left++;
        right--;
    }
    return arr;
}

console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardTheCenter([1,2,3,4,5,6]));

// [nodemon] starting `node 38_swap_toward_the_center.js`
// [ 'pizza', 42, 'Ada', 2, true ]
// [ 6, 2, 4, 3, 5, 1 ]
// [nodemon] clean exit - waiting for changes before restart