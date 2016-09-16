// Create a function that accepts an array, 
// and prints "yummy" each time one of the values is equal to "food". 
// If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    var flag = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            flag = true;
        }
    }
    if (flag != true) {
        console.log("I'm hungry");
    }
}

console.log("First run: ");
alwaysHungry(["food", "not food", "food"]);

console.log("Second run: ");
alwaysHungry(["not food", "not food", "not food"]);

// [nodemon] starting `node 37_always_hungry.js`
// First run:
// yummy
// yummy
// Second run:
// I'm hungry
// [nodemon] clean exit - waiting for changes before restart