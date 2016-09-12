// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

var count = 0;

for (var i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        // i is an exact multiple of 5
        console.log(i);
        count++;
    }
}

console.log("Count:", count)