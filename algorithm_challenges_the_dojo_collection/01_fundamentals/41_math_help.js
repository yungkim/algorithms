// Cartman doesn't really like math class and needs help.
// You are given two numbers - the coefficients M and B in the equation Y = MX + B.
// Build a function that returns the X-intercept 
// (Cartman's older cousin Charlie wisely reminds him that 
// X-intercept is the value of X where Y equals zero, but he just scoffs).

function mathHelp(m, b) {
    // Y = MX + B
    // Y - B = MX
    // (Y - B) / M = X
    var x = (0 - b) / m;
    return x;
}

console.log(mathHelp(1, 2));
console.log(mathHelp(2, 3));

// [nodemon] starting `node 41_math_help.js`
// -2
// -1.5
// [nodemon] clean exit - waiting for changes before restart