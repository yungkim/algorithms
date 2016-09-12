// Set myNumber to 42. Set myName to your name.
// Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Yung";

console.log("myNumber: ", myNumber);
console.log("myName: ", myName);

console.log("Swapping myNumber & myName");

var temp = myNumber;
myNumber = myName;
myName = temp;

console.log("myNumber: ", myNumber);
console.log("myName: ", myName);