/*
 * Quick Sort Implementation:
 *
 * Quick sort is a divide and conquer sorting algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recurively sort the sub arrays.
 * http://www.codexpedia.com/javascript/javascript-quick-sort-implementation/
 */

function quicksort(data) {
    if (data.length == 0) return []; // return empty array

    var left = [], right = [], pivot = data[0]; // set first element as pivot

    for (var i = 1; i < data.length; i++) {
        if (data[i] < pivot)
            left.push(data[i]) // elements less than pivot
        else
            right.push(data[i]); // elements greater than pivot
    }

    return quicksort(left).concat(pivot, quicksort(right));
    // The concat() method is used to join two or more arrays. This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
}

var data = [5, 8, 3, 10, 6, 1, 9, 2, 4, 7]

console.log(quicksort(data))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]