// Stan learned something today: 
// that reducing an array's .length immediately shortens it by that amount.
// Given array arr and number x, remove all except the last x elements, 
// and return arr (changed and shorter). Given ([2,4,6,8,10], 3), 
// change the given array to [6,8,10] and return it.

function onlyKeepTheLastFew(arr, num) {
    var right = arr.length - num;

    for (var left = 0; right < arr.length; left++) {
        var temp = arr[left];
        arr[left]= arr[right];
        arr[right] = temp;
        right++;
    }
    arr.length = num;
    
    return arr;
}

console.log(onlyKeepTheLastFew([2,4,6,8,10], 3));

// [nodemon] starting `node "40_only keep_the_last_few.js"`
// [ 6, 8, 10 ]
// [nodemon] clean exit - waiting for changes before restart