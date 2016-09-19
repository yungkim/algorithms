// From the above, derive the following that accept and draw the given characters, not just asterisks:
// - drawLeftChars(num, char)
// - drawRightChars(num, char)
// - drawCenteredChars(num, char)
// for all three of these, you can safely assume that 'char' is a string with length 1

function drawLeftStars(num,char) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if (i <= num) {
            output += char;
        } else if (i > num) {
            output += "_";
        }
    }
    return output;
}

function drawRightStars(num,char) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if (75 - i <= num) {
            output += char;
        } else if (75 - i > num) {
            output += "_";
        }
    }
    return output;
}

function drawCenteredStars(num,char) {
    var output = "";
    for (var i = 1; i <= 75; i++) {
        if ((75 - num)/2 >= i) {
            output += "_";
        } else if ((75 - num)/2 + num < i) {
            output += "_";
        } else {
            output += char;
        }
    }
    return output;
}

console.log(drawLeftStars(25,"L"));
console.log(drawRightStars(25,"R"));
console.log(drawCenteredStars(25,"C"));