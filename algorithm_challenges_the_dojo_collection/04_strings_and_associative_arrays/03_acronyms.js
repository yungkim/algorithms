// Create a function that, given a string, 
// returns the string's acronym (first letters only, capitalized).
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(string) {
    var wordArray = string.toUpperCase().split(" ");
    string = "";
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] != "") {
            string += wordArray[i][0];
        }
    }
    return string;
}

console.log(acronyms(" there's no free lunch - gotta pay yer way. "));
console.log(acronyms("Live from New York, it's Saturday Night!"));

// [nodemon] starting `node 03_acronyms.js`
// TNFL-GPYW
// LFNYISN
// [nodemon] clean exit - waiting for changes before restart