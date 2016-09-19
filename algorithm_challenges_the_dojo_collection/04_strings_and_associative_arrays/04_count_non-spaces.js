// Accept a string and return the number of non-space characters found in the string.
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// [nodemon] starting `node 04_count_non-spaces.js`
// 29
// [nodemon] clean exit - waiting for changes before restart