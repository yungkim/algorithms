// Just the Facts, ma'am. Factorials, that is.
// Write a function factorial(num) that, given a number,
// returns the product (multiplication) of all positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1 * 2 * 3);
// factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}

console.log(factorial(0)); // 0! (read "Zero Factorial") is defined to equal 1.
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));

// [nodemon] starting `node 02_factorial.js`
// 1
// 1
// 6
// 120
// [nodemon] clean exit - waiting for changes before restart