// Sara is looking to hire an awesome web developer and has received applications from various sources.
// Her assistant alphabetized them but noticed some duplicates.
// Given a sorted array, remove duplicate values.
// Because array elements are already in order, 
// all duplicate values will be grouped together.
// As with all these array challenges, do this without using any built-in array methods.
// 
// Second: solve this without using any nested loops.

function removeDuplicates(arr) {
    for (var i = 0; i < arr.length -1; i++) {
        if (arr[i] == arr[i+1]) {
            for (var j = i; j < arr.length -1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

function removeDuplicates2(arr) {
    var result_array = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            result_array.push(arr[i]);
        }
    }
    return result_array;
}

console.log(removeDuplicates(["John","Tim","Peter","Mike"]));
console.log(removeDuplicates(["John","Tim","Tim","Tim","Peter","Mike"]));
console.log(removeDuplicates(["John","John","Tim","Peter","Mike"]));
console.log(removeDuplicates(["John","Tim","Peter","Mike","Mike","Mike","Mike"]));

console.log(removeDuplicates2(["John","Tim","Peter","Mike"]));
console.log(removeDuplicates2(["John","Tim","Tim","Tim","Peter","Mike"]));
console.log(removeDuplicates2(["John","John","Tim","Peter","Mike"]));
console.log(removeDuplicates2(["John","Tim","Peter","Mike","Mike","Mike","Mike"]));

// [nodemon] starting `node 06_remove_duplicates.js`
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [ 'John', 'Tim', 'Peter', 'Mike' ]
// [nodemon] clean exit - waiting for changes before restart