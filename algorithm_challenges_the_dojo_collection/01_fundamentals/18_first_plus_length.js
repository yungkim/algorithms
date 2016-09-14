// Given an array, return the sum of the first value in the array, plus the array's length.
// What happens if the array's first value is not a number,
// but a string(like "what?") or a boolean (like false).

function firstPlusLength(array) {
    return array[0] + array.length;
}

console.log(firstPlusLength([1,2]));
console.log(firstPlusLength(["what?",2]));
console.log(firstPlusLength([false,2]));

// [nodemon] starting `node 18_first_plus_length.js`
// 3
// what?2
// 2
// [nodemon] clean exit - waiting for changes before restart