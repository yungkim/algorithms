// If 2 given numbers represent your birth month and day in either order, 
// log "How did you know?", else log "Just another day...."

function birthday(num1, num2) {
    if (num1 == 9) {
        if (num2 == 27) {
            console.log("How did you know?");
            return;
        }
    }  else if (num2 == 9) {
        if (num1 == 27) {
            console.log("How did you know?");
            return;
        }
    }
    console.log("Just another day....");
}

birthday(9, 27);
birthday(27, 9);
birthday(9, 9);