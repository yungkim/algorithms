// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees in Celsius,
// and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9/5 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(32));
console.log(celsiusToFahrenheit(100));

// [nodemon] starting `node 24_celsius_to_fahrenheit.js`
// 32
// 89.6
// 212
// [nodemon] clean exit - waiting for changes before restart