// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (var i = 1; i <= 100; i++) {
    
    if (i % 10 == 0) {
        console.log(" Dojo");
    } else if (i % 5 == 0) {
        console.log("Coding");
    } 
}

// [nodemon] starting `node 06_counting_the_dojo_way.js`
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// Coding
//  Dojo
// [nodemon] clean exit - waiting for changes before restart