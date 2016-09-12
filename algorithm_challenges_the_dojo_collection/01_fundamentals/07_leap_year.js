// Write a function that determines whether a given year is a leap year. 
// If a year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}

leapYear(1900);
leapYear(2000);
leapYear(2001);
leapYear(2002);
leapYear(2003);
leapYear(2004);

// [nodemon] starting `node 07_leap_year.js`
// 1900 is not a leap year
// 2000 is a leap year
// 2001 is not a leap year
// 2002 is not a leap year
// 2003 is not a leap year
// 2004 is a leap year
// [nodemon] clean exit - waiting for changes before restart