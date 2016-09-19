// Mr. Cerise teaches high school math.
// Write a function that assigns and prints a letter grade,
// given an integer representing a score from 0 to 100?
// Those getting 90+ get an 'A', 80-89 earn 'B', 70-79 is a 'C', 60-69 should get a 'D',
// and lower than 60 receive 'F'. 
// For example, given 88, you should log "Score: 88. Grade: B".
// Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(score) {
    var grade = "";

    if (score > 100 || score < 0) {
        grade = "Invalid";
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else if (score < 60) {
        grade = "F";
    }
    return "Score: " + score + ". Grade: " + grade;
}

console.log(letterGrade(100));
console.log(letterGrade(90));
console.log(letterGrade(89));
console.log(letterGrade(80));
console.log(letterGrade(79));
console.log(letterGrade(70));
console.log(letterGrade(69));
console.log(letterGrade(60));
console.log(letterGrade(59));
console.log(letterGrade(0));
console.log(letterGrade(101));
console.log(letterGrade(-1));

// [nodemon] starting `node 45_letter_grade.js`
// Score: 100. Grade: A
// Score: 90. Grade: A
// Score: 89. Grade: B
// Score: 80. Grade: B
// Score: 79. Grade: C
// Score: 70. Grade: C
// Score: 69. Grade: D
// Score: 60. Grade: D
// Score: 59. Grade: F
// Score: 0. Grade: F
// Score: 101. Grade: Invalid
// Score: -1. Grade: Invalid
// [nodemon] clean exit - waiting for changes before restart