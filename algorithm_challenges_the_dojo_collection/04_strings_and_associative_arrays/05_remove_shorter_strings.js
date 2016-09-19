// Given a string array and value (length), 
// remove any strings shorter than length from the array.

function removeShorterStrings(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0, val);
    }
    return arr;
}

console.log(removeShorterStrings(["Good", "morning", "everybody!"], 3));

// [nodemon] starting `node 05_remove_shorter_strings.js`
// [ 'Goo', 'mor', 'eve' ]
// [nodemon] clean exit - waiting for changes before restart