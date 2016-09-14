// Your function should accept an array.
// If value at [0] is greater than array's length, print "Too big!";
// If value at [0] is less than array's length, print "Too small!"; otherwise print "Jesus right!".

function fitTheFirstValue(array) {
    if (array.length < array[0]) {
        return "Too big!";
    } else if (array.length > array[0]) {
        return "Too small!";
    } else {
        return "Jesus right!";
    }
}

console.log(fitTheFirstValue([1, 2]));
console.log(fitTheFirstValue([2, 1]));
console.log(fitTheFirstValue([3, 0]));

// [nodemon] starting `node 22_fit_the_first_value.js`
// Too small!
// Jesus right!
// Too big!
// [nodemon] clean exit - waiting for changes before restart