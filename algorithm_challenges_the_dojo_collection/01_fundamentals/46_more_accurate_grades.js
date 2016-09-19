// For an additional challenge, 
// add '-' signs to scores in the bottom two percent of A, B, C and D scores, 
// and "+" signs to the top two percent of B, C and D scores 
// (sorry, Mr. Cerise never gives an A+). 
// Given 88, console.log "Score: 88. Grade: B+". 
// Given 61, log "Score: 61. Grade: D-".

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

    if (score < 92 && score >= 60) {
        // Gets last digit of a number
        // If number can be negative then use (Math.abs(number) % 10);
        if (score % 10 == 9 || score % 10 == 8) {
            grade += "+";
        } else if (score % 10 == 1 || score % 10 == 0) {
            grade += "-";
        }
    }

    return "Score: " + score + ". Grade: " + grade;
}

console.log(letterGrade(100));
console.log(letterGrade(92));
console.log(letterGrade(91));
console.log(letterGrade(90));
console.log(letterGrade(89));
console.log(letterGrade(88));
console.log(letterGrade(85));
console.log(letterGrade(81));
console.log(letterGrade(80));
console.log(letterGrade(79));
console.log(letterGrade(78));
console.log(letterGrade(71));
console.log(letterGrade(70));
console.log(letterGrade(69));
console.log(letterGrade(65));
console.log(letterGrade(60));
console.log(letterGrade(59));
console.log(letterGrade(0));
console.log(letterGrade(101));
console.log(letterGrade(-1));

// [nodemon] starting `node 46_more_accurate_grades.js`
// Score: 100. Grade: A
// Score: 92. Grade: A
// Score: 91. Grade: A-
// Score: 90. Grade: A-
// Score: 89. Grade: B+
// Score: 88. Grade: B+
// Score: 85. Grade: B
// Score: 81. Grade: B-
// Score: 80. Grade: B-
// Score: 79. Grade: C+
// Score: 78. Grade: C+
// Score: 71. Grade: C-
// Score: 70. Grade: C-
// Score: 69. Grade: D+
// Score: 65. Grade: D
// Score: 60. Grade: D-
// Score: 59. Grade: F
// Score: 0. Grade: F
// Score: 101. Grade: Invalid
// Score: -1. Grade: Invalid
// [nodemon] clean exit - waiting for changes before restart