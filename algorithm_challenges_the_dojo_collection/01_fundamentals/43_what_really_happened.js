// Kyle (smarter than Kenny) notes that the chance of one disaster is 
// totally unrelated to the chance of another,
// Change whatHappensToday() function to create whatReallyHappensToday().
// In this new function test for each disaster independently,
// instead of assuming exactly one disaster will happen.
// In other words, with this new function, all five might occur today - or none.
// Maybe Kenny will survive!

function whatHappensToday() {
    var result = "";

    if (Math.floor(Math.random() * 100) > 90) {
        result += "Volcano ";
    } 
    if (Math.floor(Math.random()* 100) > 85) {
        result += "Tsunami ";
    }
    if (Math.floor(Math.random()* 100) > 80) {
        result += "Earthquake ";
    }
    if (Math.floor(Math.random()* 100) > 75) {
        result += "Blizzard ";
    }
    if (Math.floor(Math.random()* 100) > 70) {
        result += "Meteor Strike";
    }
    if (result == "") {
        result = "Nothing happened."
    }

    return "Today: " + result;
}

console.log(whatHappensToday());

// [nodemon] starting `node 43_what_really_happened.js`
// Today: Earthquake Blizzard Meteor Strike
// [nodemon] clean exit - waiting for changes before restart
// [nodemon] restarting due to changes...
// [nodemon] starting `node 43_what_really_happened.js`
// Today: Nothing happened.
// [nodemon] clean exit - waiting for changes before restart