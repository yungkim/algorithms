// (optional) Do Fahrenheit and Celsius values equate at a certain number?
// Scientific calculation can be complex, 
// so for this challenge just try a series of Celsius of integer values starting at 200,
// going downward (descending), 
// checking whether it is equal to the corressponding Fahrenheit value.

function celsiusToFahrenheitEquate() {
    for (var i = 200; i > -45; i--) {
        console.log(i + " and " + (i * 9/5 + 32))
        if (i == (i * 9/5 + 32)) {
            console.log("Fahrenheit and Celsius values equate at " + i)
        }
    }
}

celsiusToFahrenheitEquate();

// [nodemon] starting `node 25_fahrenheit_and_celsius_equate.js`
// 200 and 392
// 199 and 390.2
// 198 and 388.4
// 197 and 386.6
// 196 and 384.8
// .
// .
// .
// -40 and -40
// Fahrenheit and Celsius values equate at -40
// -41 and -41.8
// -42 and -43.599999999999994
// -43 and -45.400000000000006
// -44 and -47.2
// [nodemon] clean exit - waiting for changes before restart