// Assume that you have a text field that is exactly 75 characters long.
// You want to fill it with spaces and asterisks ('*'), sometimes called stars.
// You should print the given number of asterisks consecutively.
// Depending on which function is called, those stars should be left-justified 
// (first star would be very first char in the text field), or right left-justified 
// (last star would be very last char in the text field, 
// with potentially some number of spaces at beginning of text field before the block of stars start), 
// or centered in the 75-character text field 
// (with same number of spaces on either side of the block of stars, plus/minus one).
// - Write a function drawLeftStars(num) that accepts a number and printsthat many asterisks.
// - Write a function drawRightStars(num) that prints 75 characters total. 
// Stars should build from right side. The last num characters should be asterisks; 
// the other 75 should be spaces.
// - Write a function drawCenteredStars(num) that prints 75 characters total. 
// The stars should be centered in the 75. 
// The middle num characters should be asterisks; the rest of the 75 spaces.
// - (optional) Create epic text-art Empire vs. Rebellion battle, 
// using formations like (=*=) and >o<.

function drawLeftStars(num) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if (i <= num) {
            output += "*";
        } else if (i > num) {
            output += "_";
        }
    }
    return output;
}

function drawRightStars(num) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if (75 - i <= num) {
            output += "*";
        } else if (75 - i > num) {
            output += "_";
        }
    }
    return output;
}

function drawCenteredStars(num) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if ((75 - num)/2 >= i) {
            output += "_";
        } else if ((75 - num)/2 + num < i) {
            output += "_";
        } else {
            output += "*";
        }
    }
    return output;
}

function empireVsRebellionBattle(emp, reb) {
    var output = "";
    for (var i = 1; i <= emp + reb; i++) {
        if (i <= emp) {
            output += "=*= ";
        } else if (i > emp) {
            output += ">o< ";
        }
    }
    return output;
}

console.log(drawLeftStars(25));
console.log(drawRightStars(25));
console.log(drawCenteredStars(25));
console.log(empireVsRebellionBattle(5,10));

// [nodemon] starting `node 03_star_art.js`
// *************************__________________________________________________
// _________________________________________________**************************
// _________________________*************************_________________________
// =*= =*= =*= =*= =*= >o< >o< >o< >o< >o< >o< >o< >o< >o< >o<
// [nodemon] clean exit - waiting for changes before restart