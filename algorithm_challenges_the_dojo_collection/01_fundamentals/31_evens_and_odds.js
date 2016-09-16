// Create a function that accepts an array.
// Every time that array has three odd values in a row, print "That's odd!" 
// Every time the array has three evens in a row, print "Even more so!"

function evensAndOdds(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
        if ((array[i] % 2 == 1) && (array[i+1] % 2 == 1) && (array[i+2] % 2 == 1)) {
            console.log(array[i+1]);
            console.log(array[i+2]);
            console.log("That's odd!");
            i += 2;
        } else if ((array[i] % 2 == 0) && (array[i+1] % 2 == 0) && (array[i+2] % 2 == 0)) {
            console.log(array[i+1]);
            console.log(array[i+2]);
            console.log("Even more so!");
            i += 2;
        }
    }
}

evensAndOdds([1,3,5,2,4,6,1,1,2,2,3]);

// [nodemon] starting `node 31_evens_and_odds.js`
// 1
// 3
// 5
// That's odd!
// 2
// 4
// 6
// Even more so!
// 1
// 1
// 2
// 2
// 3
// [nodemon] clean exit - waiting for changes before restart