// Add odd integers from -300,000 to 300,000, and console.log the final sum.
// Is there a shortcut?

var sum = 0;

for (var i = -299999; i <= 299999; i += 2) {
    sum += i;
}
console.log(sum);

// [nodemon] starting `node 12_whoa_that_suckers_huge.js`
// 0
// [nodemon] clean exit - waiting for changes before restart