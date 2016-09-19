// Create a Javascript function that given a string, returns the integer made from the string's digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 01357924680.

function stringGetDigits(string) {
    for (var i = 0; i < string.length; i++) {
        // use the remainder operator (%) to express the fact that a number is an integer if the remainder of dividing it by 1 is 0.
        if (string[i] % 1 !== 0) {
            var string1 = string.substr(0, i);
            var string2 = string.substr(i + 1);
            string = string1 + string2;
        }
    }    
    return string;
}

console.log(stringGetDigits("0s1a3y5w7h9a2t4"));

// [nodemon] starting `node 02_string_get_digits.js`
// 01357924
// [nodemon] clean exit - waiting for changes before restart