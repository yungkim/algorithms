// Create a function that, given a string, returns all of that string's contents, but without blanks.
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            var string1 = string.substr(0, i);
            var string2 = string.substr(i + 1);
            string = string1 + string2;
        }
    }
    return string;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// [nodemon] starting `node 01_remove_blanks.js`
// PlayThatFunkyMusic
// [nodemon] clean exit - waiting for changes before restart