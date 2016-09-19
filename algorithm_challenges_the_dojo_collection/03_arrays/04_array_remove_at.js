// Given array and an index into array, remove and return the value at that index. 
// Do this without using built-in array methods except pop().
// Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index) {
    var flag = true;

    if (index < 0 || index >= arr.length) {
        index = arr.length;
        flag = false;
    }
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    if (flag) {
        arr.pop();
    }

    return arr;
}
console.log(removeAt([1, 2, 3, 4, 5],-1));
console.log(removeAt([1, 2, 3, 4, 5],0));
console.log(removeAt([1, 2, 3, 4, 5],1));
console.log(removeAt([1, 2, 3, 4, 5],2));
console.log(removeAt([1, 2, 3, 4, 5],3));
console.log(removeAt([1, 2, 3, 4, 5],4));
console.log(removeAt([1, 2, 3, 4, 5],5));

// [nodemon] starting `node 04_array_remove_at.js`
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3, 4, 5 ]
// [ 1, 3, 4, 5 ]
// [ 1, 2, 4, 5 ]
// [ 1, 2, 3, 5 ]
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]
// [nodemon] clean exit - waiting for changes before restart