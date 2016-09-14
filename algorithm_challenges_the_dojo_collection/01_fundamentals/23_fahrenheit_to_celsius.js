// Kelvin wants to convert between temperature scales.
// Create farenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit,
// and returns the equivalent temperature as expressed in Celsius degrees.
// For review, Fahrenheit = (9/5 * Celsius) + 32.

function farenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5/9;
}

console.log(farenheitToCelsius(0));
console.log(farenheitToCelsius(32));
console.log(farenheitToCelsius(100));

// [nodemon] starting `node 23_fahrenheit_to_celsius.js`
// -17.77777777777778
// 0
// 37.77777777777778
// [nodemon] clean exit - waiting for changes before restart