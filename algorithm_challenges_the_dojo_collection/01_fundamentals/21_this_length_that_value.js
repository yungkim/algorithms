// Given two numbers, return array of length num1 with each value num2. 
// Print "Jinx!" if they are same.

function thisLengthThatValue(num1, num2) {
    var result_array = [];

    if (num1 === num2) {
        return "Jinx!";
    }
    for (var i = 0; i < num1; i++) {
        result_array.push(num2);
    }
    return result_array
}

console.log('1, 4', thisLengthThatValue(1,4))
console.log('2, 6', thisLengthThatValue(2,6))
console.log('6, 6', thisLengthThatValue(6,6))
console.log('0, 6', thisLengthThatValue(0,6))
console.log('-1, 6', thisLengthThatValue(-1,6))

// [nodemon] starting `node 21_this_length_that_value.js`
// 1, 4 [ 4 ]
// 2, 6 [ 6, 6 ]
// 6, 6 Jinx!
// 0, 6 []
// -1, 6 []
// [nodemon] clean exit - waiting for changes before restart