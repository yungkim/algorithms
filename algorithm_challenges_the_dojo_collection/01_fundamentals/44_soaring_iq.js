// Your time with us will defintely make you smarter! 
// Let's say a new Dojo student, Bogdan, entered with a modest IQ of101.
// How smart would Bogdan be at the end of the bootcamp,
// if his IQ rose by .01 on the first day, 
// then went up by an additional .02 on the second day,
// up by .03 more on the third day, etc... 
// all the way until increasing by .98 on his 98th day (the end of 14 full weeks)?

function soaringIq() {
    var iq = 101;
    for (var day = 1; day <= 98; day++) {
        iq += day / 100;
    }
    return iq;
}

console.log(soaringIq());

// [nodemon] starting `node 44_soaring_iq.js`
// 149.51
// [nodemon] clean exit - waiting for changes before restart