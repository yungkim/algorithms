// Based on earlier "Countdown By Fours", given lowNum, highNum, mult, 
// print multiples of mult from highNum down to lowNum, using a FOR.
// For (2, 9, 3), print 9 6 3 (on successive lines).

function flexibleCountDown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}

flexibleCountDown(2, 9, 3);

// [nodemon] starting `node 14_flexible_countdown.js`
// 9
// 6
// 3
// [nodemon] clean exit - waiting for changes before restart