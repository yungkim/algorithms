// Kenny tries to stay safe, but somehow everyday something happens. 
// If there is a 10% chance of volcano, 15% chance of tsunami, 
// 20% of chance of earthquake, 25% chance of blizzard, 
// and 30% chance of meteor strike, 
// write function whatHappensToday() to print the outcome.

function whatHappensToday() {
    var result = "";
    var percent = Math.floor(Math.random() * 100);

    if (percent > 90) {
        result = "Volcano";
    } else if (percent > 75) {
        result = "Tsunami";
    } else if (percent > 55) {
        result = "Earthquake";
    } else if (percent > 30) {
        result = "Blizzard";
    } else if (percent > 0) {
        result = "Meteor Strike";
    }

    return "Today: " + result;
}

console.log(whatHappensToday());

// [nodemon] starting `node 42_poor_kenny.js`
// Today: Blizzard
// [nodemon] clean exit - waiting for changes before restart