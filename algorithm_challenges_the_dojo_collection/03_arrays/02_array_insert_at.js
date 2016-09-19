// Given array, index, and additional value, 
// insert the value into array at given index.
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, index, val) {
    var temp = arr[index];
    var temp2 = "";

    for (var i = index + 1; i < arr.length; i++) {
        temp2 = arr[i];
        arr[i] = temp;
        temp = temp2;
    }
    arr[index] = val;
    if (temp == true) {
        arr[arr.length] = temp;
    }

    return arr;
}

console.log(insertAt([1, 2, 3, 4, 5],0,0));
console.log(insertAt([1, 2, 3, 4, 5],1,0));
console.log(insertAt([1, 2, 3, 4, 5],2,0));
console.log(insertAt([1, 2, 3, 4, 5],3,0));
console.log(insertAt([1, 2, 3, 4, 5],4,0));
console.log(insertAt([1, 2, 3, 4, 5],5,0));
console.log(insertAt([1, 2, 3, 4, 5],6,0));

// [nodemon] starting `node 02_array_insert_at.js`
// [ 0, 1, 2, 3, 4 ]
// [ 1, 0, 2, 3, 4 ]
// [ 1, 2, 0, 3, 4 ]
// [ 1, 2, 3, 0, 4 ]
// [ 1, 2, 3, 4, 0 ]
// [ 1, 2, 3, 4, 5, 0 ]
// [ 1, 2, 3, 4, 5, , 0 ]
// [nodemon] clean exit - waiting for changes before restart